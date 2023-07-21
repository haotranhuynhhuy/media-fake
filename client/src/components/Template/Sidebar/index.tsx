import React, { useEffect, useRef, useState } from "react";
import Image from "../../BaseComponents/Image";
import Typography from "../../BaseComponents/Typography";
import Icon, { IconName } from "../../BaseComponents/Icon";
import useClickOutside from "../../../hooks/useClickOutside";
import logo from "../../../assets/images/image_default.png";
import { Link, useNavigate } from "react-router-dom";
import { HttpClientMethod } from "../../../libs/axios";

export type OptionSideBar = {
  id?: number;
  icon?: IconName;
  title?: string;
  child?: boolean;
  itemChild?: OptionSideBar[];
  slug: string;
};

interface SideBarProps {
  imageUser?: string;
  nameUser?: string;
  optionSideBar: OptionSideBar[];
  handleOffSideBar?: () => void;
  mainLayout: boolean;
  cloneShowSideBar: boolean;
}

const Sidebar: React.FC<SideBarProps> = ({
  imageUser,
  nameUser,
  optionSideBar,
  handleOffSideBar,
  mainLayout,
  cloneShowSideBar,
}) => {
  const Guest = HttpClientMethod.getAccessToken();
  const [isOpen, setIsOpen] = useState(false);
  const [idActive, setIdActive] = useState<number>(0);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isCloseSkeleton, setIsCloseSkeleton] = useState(false);
  const currUrl = window.location.pathname;
  const [cloneUrl, setUrl] = useState(currUrl);
  const sidebarSession = sessionStorage.getItem("id_sidebar");
  const listCheck = [
    "/setting",
    "/department",
    "/message",
    "/comming-soon/message",
    "/comming-soon/coupon",
  ];
  const navigator = useNavigate();

  const handleCheckPage = () => listCheck.includes(cloneUrl);

  const toggling = (item: boolean) => {
    if (item) {
      setIsOpen(!isOpen);
    }
  };
  useClickOutside(dropdownRef, () => {
    if (isOpen) setIsOpen(false);
  });
  useEffect(() => {
    setTimeout(() => {
      setIsCloseSkeleton(true);
    }, 2000);
  }, [isCloseSkeleton]);

  useEffect(() => {
    setIdActive(Number(sidebarSession));
  }, []);

  return (
    <div className="t-sidebar">
      <div className="t-sidebar_wrapper">
        <div className="t-sidebar_wrapper_header">
          <div className="t-sidebar_wrapper_header-wrapper ">
            {Guest !== "GUEST" &&
              ((!!imageUser && isCloseSkeleton && (
                <Image src={imageUser || logo} ratio="112x63" />
              )) ||
                (!imageUser && <Image src={logo} ratio="112x63" />) || (
                  <span className="t-sidebar_wrapper_header-wrapper_loading t-sidebar_wrapper_header-wrapper_loading_avatar" />
                ))}
            {Guest === "GUEST" && !isOpen && (
              <Image src={logo} ratio="112x63" />
            )}
            {(!!nameUser && isCloseSkeleton && (
              <div className="t-sidebar_wrapper_header-wrapper_title">
                <Typography
                  content={`Hi ${nameUser || "User"}`}
                  modifiers={["white", "capitalize", "20x30", "700"]}
                />
                <Typography
                  content="nice to meet you!"
                  modifiers={["white", "capitalize", "16x24", "700", "left"]}
                />
              </div>
            )) || (
              <>
                <span className="t-sidebar_wrapper_header-wrapper_loading t-sidebar_wrapper_header-wrapper_loading_name" />
                <span className="t-sidebar_wrapper_header-wrapper_loading t-sidebar_wrapper_header-wrapper_loading_hi" />
              </>
            )}
          </div>
          {cloneShowSideBar && (
            <div
              className="t-sidebar_wrapper_header_off-sidebar"
              onClick={handleOffSideBar}
            >
              <Icon iconName="chevronLeft" size="16x16" isPointer />
            </div>
          )}
        </div>
        <div
          className={`t-sidebar_wrapper_content ${
            !handleCheckPage() && "page_active"
          }`}
        >
          {optionSideBar.length &&
            optionSideBar.map((sidebar) => (
              <Link
                to={
                  sidebar.slug &&
                  (sidebar.slug.includes("http") ||
                    sidebar.slug.includes("https"))
                    ? "/"
                    : sidebar.slug
                }
                key={sidebar.id}
              >
                <div
                  className={`t-sidebar_wrapper_content_item ${
                    idActive === sidebar.id ? "item_actives" : ""
                  }`}
                  onClick={() => {
                    if (
                      sidebar.slug &&
                      (sidebar.slug.includes("http") ||
                        sidebar.slug.includes("https"))
                    ) {
                      window.open(sidebar.slug, "_blank");
                    }
                    toggling(sidebar.child || false);
                    if (sidebar.icon === "logout") {
                      HttpClientMethod.clearToken();
                      navigator("/login");
                    }
                    sessionStorage.setItem(
                      "id_sidebar",
                      (sidebar.id || 0).toString()
                    );
                  }}
                >
                  <div className="t-sidebar_wrapper_content_item_title">
                    <Icon
                      iconName={sidebar.icon as IconName}
                      size="30x30"
                      isPointer
                    />
                    <Typography
                      content={sidebar.title}
                      modifiers={["white", "capitalize", "16x24", "700"]}
                    />
                  </div>
                  {sidebar.child ? (
                    <div>
                      <Icon iconName="chevronRight" size="16x16" isPointer />
                      {isOpen && (
                        <div
                          key={sidebar.id}
                          className="t-sidebar_wrapper_content_item-child"
                        >
                          {sidebar.itemChild?.length &&
                            sidebar.itemChild?.map((item) => (
                              <div
                                key={item.id}
                                className="t-sidebar_wrapper_content_item-child_item"
                              >
                                <Icon
                                  iconName={item.icon as IconName}
                                  size="36x36"
                                  isPointer
                                />
                                <Typography
                                  content={item.title}
                                  type="p"
                                  modifiers={[
                                    "blueNavy",
                                    "capitalize",
                                    "20x30",
                                    "700",
                                  ]}
                                />
                              </div>
                            ))}
                        </div>
                      )}
                    </div>
                  ) : null}
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
