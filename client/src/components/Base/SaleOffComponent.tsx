import React from "react";
import { SaleOffProps } from "../../types";
interface SaleOff {
  data: SaleOffProps;
}
const SaleOffComponent = ({ data }: SaleOff) => {
  return (
    <div className="w-full">
      <div className="relative">
        <img src={data.src} alt={data.alt} className="rounded-2xl" />
        {data.saleOff && (
          <div className="absolute flex  left-0 bottom-0 text-white bg-primary px-3 py-2 rounded-tr-3xl rounded-bl-2xl">
            <p className=" text-7xl font-bold">{data.saleOff}</p>
            <div className="flex flex-col items-center">
              <p
                className=" text-4xl font-bold"
                style={{ marginBlockStart: 7, marginBlockEnd: -11 }}
              >
                %
              </p>
              <p className=" text-2xl">Off</p>
            </div>
          </div>
        )}
      </div>
      <div className="mt-8 space-y-2">
        <p className="font-bold text-xl">{data.name}</p>
        <p className="text-xl text-secondary font-bold bg-tertiary w-fit py-1 px-4 rounded-lg">
          {data.remaining}
        </p>
      </div>
    </div>
  );
};

export default SaleOffComponent;
