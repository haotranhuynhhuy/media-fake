import React, { useRef, useState, useEffect } from "react";
import Image from "../Image";
import Icon, { IconName } from "../Icon";
import Typography from "../Typography";
import Link from "../Link";
import useClickOutside from "../../../hooks/useClickOutside";
import { mapModifiers } from "../../../utils/functions";

export type TypeDropdown = "menu" | "phone_number" | "dropDown";

export type OptionsChild = {
  id?: number;
  name?: string;
  acronym?: string;
  icon?: string;
  slug?: string;
  click?: () => void;
};

interface DropdownProps {
  optionsChild: OptionsChild[];
  typeDropdown?: TypeDropdown;
  name?: string;
  handleClick?: (option: OptionsChild) => void;
  iconName?: string;
  isDisabled?: boolean;
  isAvatar?: boolean;
  img?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  optionsChild,
  typeDropdown,
  name,
  handleClick,
  iconName,
  isDisabled,
  isAvatar = false,
  img,
}) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggling = () => setIsOpen(!isOpen);

  useClickOutside(dropdownRef, () => {
    if (isOpen) setIsOpen(false);
  });
  return (
    <div
      className={`m-dropdown ${
        typeDropdown === "phone_number" ? "m-dropdown_phone_number" : ""
      }`}
      ref={dropdownRef}
      onClick={!isDisabled ? toggling : () => isDisabled}
    >
      {isAvatar ? (
        <Image src={img || ""} alt="avatar header" />
      ) : typeDropdown === "phone_number" ? null : (
        <Icon
          iconName={
            typeDropdown === "dropDown" ? (iconName as IconName) : "user"
          }
        />
      )}
      <Typography
        content={name}
        type="p"
        modifiers={
          typeDropdown === "phone_number"
            ? ["400", "dimGray", "uppercase", "14x21"]
            : ["700", "blueNavy", "uppercase"]
        }
      />
      <div className={mapModifiers("m-dropdown_icon", isOpen && "open_list")}>
        <Icon
          iconName={
            typeDropdown === "phone_number" ? "dropDown" : "dropDown_blue"
          }
          size={(typeDropdown === "phone_number" && "12x12") || "17x12"}
          isPointer
        />
      </div>
      {isOpen && (
        <ul className="m-dropdown_list">
          {optionsChild.length
            ? optionsChild.map((option, idx) => (
                <Link
                  href={
                    option.slug &&
                    (option.slug.includes("http") ||
                      option.slug.includes("https"))
                      ? "/"
                      : option.slug
                  }
                >
                  <li
                    className="m-dropdown_item"
                    onClick={() => {
                      if (handleClick) {
                        handleClick(option);
                        setIsOpen(false);
                      }
                      if (option.slug === "/setting") {
                        sessionStorage.setItem("id_sidebar", (6).toString());
                      }
                    }}
                  >
                    <div
                      className="flex items-center gap-3"
                      onClick={() => {
                        if (
                          option.slug &&
                          (option.slug.includes("http") ||
                            option.slug.includes("https"))
                        ) {
                          window.open(option.slug, "_blank");
                        }
                        if (option?.click) {
                          option.click();
                        }
                      }}
                    >
                      <Icon
                        iconName={option.icon as IconName}
                        size={"30x30"}
                        isPointer
                      />
                      <Typography
                        type="p"
                        modifiers={["capitalize", "500"]}
                        content={option.name}
                      />
                    </div>
                  </li>
                </Link>
              ))
            : null}
        </ul>
      )}
    </div>
  );
};

Dropdown.defaultProps = {};

export default Dropdown;
