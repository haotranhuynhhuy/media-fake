import moment from "moment";
import React from "react";

import "moment/locale/es";
import Link from "../Link";
import Image from "../Image";
import { mapModifiers } from "../../../utils/functions";
import Typography from "../Typography";
import Icon from "../Icon";

export interface NewsListCardProps {
  imgSrc: string;
  alt?: string;
  title?: string;
  isVertical?: boolean;
  href?: string;
  nameUser?: string;
  date?: Date;
  handleClick?: () => void;
}

export const NewsListCard: React.FC<NewsListCardProps> = ({
  imgSrc,
  alt,
  title,
  isVertical,
  href,
  nameUser,
  date = new Date(),
  handleClick,
}) => (
  <div className={mapModifiers("o-notifyListCard", isVertical && "isVertical")}>
    <Link href={href} handleClick={handleClick}>
      <div className="o-notifyListCard_wrapper">
        <div className="o-notifyListCard_wrapper_heading">
          <div className="o-notifyListCard_image">
            <Image src={imgSrc} alt={alt || "NewsListCard"} />
          </div>
          <div className="o-notifyListCard_title_main">
            <Typography
              modifiers={["14x21", "jet", "400"]}
              content={title}
              type="p"
            />
          </div>
        </div>
        <div className="o-notifyListCard_title_date">
          <Typography
            type="p"
            modifiers={["12x18", "dimGray"]}
            content={nameUser}
          />
          <Typography
            type="p"
            modifiers={["12x18", "dimGray"]}
            content={moment(date).locale("en").format("MM/DD/YYYY hh:mm")}
          />
        </div>
      </div>
    </Link>
  </div>
);

interface CardNotifyListProps {
  notifyList?: NewsListCardProps[];
  handleClickViewAll?: () => void;
  handleClickDoneAll?: () => void;
  title: string;
}

const CardNotifyList: React.FC<CardNotifyListProps> = ({
  notifyList = [],
  handleClickDoneAll,
  title,
}) => (
  <div className="o-CardNotifyList">
    <div className="o-CardNotifyList_title">
      <Typography modifiers={["blueNavy", "700", "16x24"]} content={title} />
      <div className="o-CardNotifyList_title_icon" onClick={handleClickDoneAll}>
        <Icon iconName="doneall" size="24x24" />
        <div className="o-CardNotifyList_title_title">
          <Typography
            modifiers={["white", "14x21", "400", "center"]}
            content="Mark all as read"
          />
          <Icon iconName="right" size="16x16" />
        </div>
      </div>
    </div>
    <div className="o-CardNotifyList_list">
      {notifyList.length ? (
        notifyList
          .slice(0)
          .reverse()
          .map((item, idx) => (
            <div
              className="o-CardNotifyList_list_item"
              key={`o-CardNotifyList_list${idx.toString()}`}
            >
              <NewsListCard {...item} />
            </div>
          ))
      ) : (
        <div className="o-CardNotifyList_list-no">
          <Typography
            modifiers={["dimGray", "14x21", "400", "center"]}
            content="No Notify"
          />
        </div>
      )}
    </div>
  </div>
);

CardNotifyList.defaultProps = {};

export default CardNotifyList;
