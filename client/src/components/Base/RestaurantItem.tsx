import React from "react";
import SellIcon from "@mui/icons-material/Sell";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import StarIcon from "@mui/icons-material/Star";
import { RestaurantProps } from "../../types";
import classNames from "classnames";

interface Restaurants {
  data: RestaurantProps;
}
const RestaurantItem = ({ data }: Restaurants) => {
  const buttonStyle = classNames("py-2 px-4 w-fit font-bold rounded-lg", {
    ["text-secondary bg-dangerBtn "]: !data.isOpen,
    ["text-success bg-successBtn "]: data.isOpen,
  });
  return (
    <div className="flex flex-col gap-5">
      <div className="relative">
        <img className="rounded-lg" src={data.src} alt={data.alt} />
        <div className="absolute top-6 left-6 text-white gap-2 flex text-xl">
          <div className="flex items-center gap-2 bg-secondary py-2 px-4 rounded-xl font-bold">
            <SellIcon />
            <p>{data.saleOff}% off</p>
          </div>
          <div className="flex items-center gap-2 bg-primary  py-2 px-4 rounded-xl font-bold">
            <WatchLaterIcon />
            <p>Fast</p>
          </div>
        </div>
      </div>
      <div className="flex space-x-6 items-center">
        <div>
          <img src={data.logo} alt="logo" />
        </div>
        <div>
          <p className=" text-xl font-bold">{data.title}</p>
          <div className="flex items-center text-primary text-xl gap-2">
            <StarIcon fontSize="medium" />
            <p>{data.star}</p>
          </div>
        </div>
      </div>
      <button className={buttonStyle}>
        {data.isOpen ? "Open Now" : "Open Tomorrow"}
      </button>
    </div>
  );
};

export default RestaurantItem;
