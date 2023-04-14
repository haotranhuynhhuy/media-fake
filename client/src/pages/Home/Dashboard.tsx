import React from "react";
import Input from "../../components/BaseComponents/Input";
import Image from "../../components/BaseComponents/Image";
import image from "../../assets/react.svg";
import Dropdown from "../../components/BaseComponents/Dropdown";

const optionSideBarMobile = [
  {
    id: 1,
    slug: "/",
    name: "hehehe",
    icon: "edit",
  },
  {
    id: 6,
    slug: "/authen/login",
    name: "hahaha",
    icon: "edit",
  },
];
const Dashboard = () => {
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
    </div>
  );
};

export default Dashboard;
