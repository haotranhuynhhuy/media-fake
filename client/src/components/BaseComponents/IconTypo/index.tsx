import React, { useState } from "react";
import Icon, { IconName } from "../Icon";
import Typography from "../Typography";
import { OptionsChild } from "../../../types";
import Link from "../Link";
import Image from "../Image";
import { mapModifiers } from "../../../utils/functions";

interface IconTypoProps {
  optionsChild: OptionsChild[];
  img?: string;
  name?: string;
  handleSeeMore: () => void;
}

const IconTypo: React.FC<IconTypoProps> = ({
  optionsChild,
  img,
  name,
  handleSeeMore,
}) => {
  const [seeMore, setSeeMore] = useState(false);
  const toggling = () => {
    setSeeMore(!seeMore);
    handleSeeMore();
  };

  const toggleNotSeeMore = () => {
    setSeeMore(!seeMore);
    optionsChild.splice(optionsChild.length / 2);
  };
  return (
    <div className="m-icontypo">
      <div className="m-icontypo_user">
        {img ? (
          <Image src={img} alt="avatar header" />
        ) : (
          <Icon iconName={"user"} size="28x28" />
        )}
        <Typography content={name} type="p" modifiers={["capitalize", "500"]} />
      </div>
      {optionsChild.length && (
        <ul className="m-icontypo_list">
          {optionsChild.map((option, idx) => (
            <Link
              href={
                option.slug &&
                (option.slug.includes("http") || option.slug.includes("https"))
                  ? "/"
                  : option.slug
              }
              key={option.id}
            >
              <li className="m-icontypo_item">
                <div className="flex items-center gap-3">
                  <Icon
                    iconName={option.icon as IconName}
                    size={"28x28"}
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
          ))}
        </ul>
      )}

      <div
        className="m-icontypo_bottom"
        onClick={!seeMore ? toggling : toggleNotSeeMore}
      >
        <div
          className={mapModifiers(
            "m-icontypo_bottom-icon",
            seeMore && "open_more"
          )}
        >
          <Icon iconName={"dropDown"} size="17x12" />
        </div>
        <Typography content={seeMore ? "Ẩn bớt" : "Xem thêm"} />
      </div>
    </div>
  );
};

IconTypo.defaultProps = {};

export default IconTypo;
