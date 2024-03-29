import React, { useState } from "react";
import Input from "../../components/BaseComponents/Input";
import Image from "../../components/BaseComponents/Image";
import image from "../../assets/react.svg";
import Dropdown from "../../components/BaseComponents/Dropdown";
import IconTypo from "../../components/BaseComponents/IconTypo";
import alarm from "../../assets/images/alarmSVG.svg";
import CardNotifyList, {
  NewsListCardProps,
} from "../../components/BaseComponents/CardNotify";
import PostForm from "../../components/Template/PostForm";
import Sidebar from "../../components/Template/Sidebar";

const Dashboard = () => {
  const [cardListnotify, setCardListnotify] = useState<NewsListCardProps[]>([
    {
      imgSrc: alarm,
      nameUser: "",
      title:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur alias corporis vero. Velit minus quisquam, eveniet voluptatum magni provident autem! Qui delectus corrupti, error eum hic dolore. Rerum, nesciunt libero.",
      date: new Date(),
      handleClick: () => {},
      href: "/",
      isVertical: true,
    },
    {
      imgSrc: alarm,
      nameUser: "",
      title:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur alias corporis vero. Velit minus quisquam, eveniet voluptatum magni provident autem! Qui delectus corrupti, error eum hic dolore. Rerum, nesciunt libero.",
      date: new Date(),
      handleClick: () => {},
      href: "/",
      isVertical: true,
    },
  ]);
  const [isOpenNotify, setisShowNotify] = useState(true);
  const [showSideBar, setShowSideBar] = useState(false);

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

  const optionSideBarOwn = [
    {
      id: 0,
      icon: "calendar_white",
      title: "menu.my_calendar",
      child: false,
      slug: "/",
    },
    {
      id: 1,
      icon: "tag",
      title: "menu.coupon_management",
      child: false,
      slug: "/login",
    },
  ];

  const handleSeeMore = () => {
    setOptionSideBarMobile((prev) => {
      return [...prev, ...optionSideBarMobile2];
    });
  };
  const handleShowSideBar = () => {
    setShowSideBar(!showSideBar);
  };
  return (
    <div className="w-screen h-screen">
      <Input id="search" iconName="search" iconSize="20x20" />
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
      <div>
        {isOpenNotify && (
          <CardNotifyList title="Thông báo" notifyList={cardListnotify} />
        )}
      </div>

      <div>
        <PostForm />
      </div>

      <div>
        <Sidebar
          optionSideBar={optionSideBarOwn}
          nameUser={"GUEST"}
          handleOffSideBar={handleShowSideBar}
          mainLayout
          cloneShowSideBar={false}
        />
      </div>
    </div>
  );
};

export default Dashboard;
