import React, { useState } from "react";
import Input from "../../components/BaseComponents/Input";
import Image from "../../components/BaseComponents/Image";
import image from "../../assets/react.svg";
import Dropdown from "../../components/BaseComponents/Dropdown";
import IconTypo from "../../components/BaseComponents/IconTypo";

const Dashboard = () => {
  const [optionSideBarMobile, setOptionSideBarMobile] = useState([
    {
      id: 1,
      slug: "/",
      name: "hehehe",
      icon: "edit",
    },
    {
      id: 6,
      slug: "/",
      name: "hahaha",
      icon: "edit",
    },
  ]);

  const optionSideBarMobile2 = [
    {
      id: 3,
      slug: "/",
      name: "huhuhu",
      icon: "edit",
    },
    {
      id: 5,
      slug: "/",
      name: "hihih",
      icon: "edit",
    },
  ];

  const handleSeeMore = () => {
    setOptionSideBarMobile((prev) => {
      return [...prev, ...optionSideBarMobile2];
    });
  };
  return (
    <div className="w-screen h-screen">
      <Input id="search_id" iconName="search" iconSize="20x20" />
      <Image src={image} alt="photo" size="contain" />
      <div className="flex justify-end">
        <Dropdown
          optionsChild={optionSideBarMobile || []}
          typeDropdown="menu"
          name="username"
        />
      </div>

      <IconTypo
        optionsChild={optionSideBarMobile}
        name="Hao tran"
        handleSeeMore={handleSeeMore}
      />
    </div>
  );
};

export default Dashboard;
