import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { PopularProps } from "../../types";

interface Popular {
  data: PopularProps;
}
const PopularItem = ({ data }: Popular) => {
  return (
    <div className="flex flex-col gap-2">
      <img className="rounded-lg" src={data.src} alt={data.alt} />
      <p className=" text-xl font-semibold">{data.title}</p>
      <div className="flex text-primary text-xl opacity-70">
        <LocationOnIcon />
        <p>{data.location}</p>
      </div>
      <p className=" text-xl font-semibold">${data.price}</p>
      <button className="py-5 px-16 w-full bg-secondary text-white rounded-lg">
        Order Now
      </button>
    </div>
  );
};

export default PopularItem;
