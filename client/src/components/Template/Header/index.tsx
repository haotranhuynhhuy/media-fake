import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Icon from "../../BaseComponents/Icon";
import Dropdown from "../../BaseComponents/Dropdown";
import { OptionsChild } from "../../../types";
import CardNotifyList, {
  NewsListCardProps,
} from "../../BaseComponents/CardNotify";
import useClickOutside from "../../../hooks/useClickOutside";

interface HeaderProps {
  // nameUser?: string;
  optionsProfile?: OptionsChild[];
  handleClickProfile?: (option: OptionsChild) => void;
  iconNameProfile?: string;
  nameUser?: string;
  CardList?: NewsListCardProps[];
  numberNotifi?: number;
}
const Header: React.FC<HeaderProps> = ({
  optionsProfile,
  handleClickProfile,
  iconNameProfile,
  nameUser,
  CardList,
  numberNotifi = 0,
}) => {
  const [isOpenNotify, setIsOpenNotify] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [numNotifi, setNumNotifi] = useState(numberNotifi);

  const toggling = () => {
    setIsOpenNotify(!isOpenNotify);
  };

  useClickOutside(dropdownRef, () => {
    if (isOpenNotify) setIsOpenNotify(false);
  });

  return (
    <nav className="sticky top-0 z-10 bg-white w-full ">
      <div className="max-w-screen flex items-center justify-between px-4 py-2">
        <Link to="/" className="flex items-center">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8 mr-3"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap">
            gapo
          </span>
        </Link>
        <div>
          <ul className="hidden font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex md:flex-row md:space-x-10 md:mt-0 md:border-0 md:bg-white">
            <li>
              <Link
                to={"/"}
                className="flex flex-col w-[100px] items-center py-2 pl-3 pr-4 text-white  rounded md:bg-transparent md:text-gray-700 md:p-0 hover:bg-slate-200"
                aria-current="page"
              >
                <Icon iconName="home" />
                Trang chủ
              </Link>
            </li>
            <li>
              <Link
                to={"/"}
                className="flex flex-col w-[100px] items-center py-2 pl-3 pr-4 text-white  rounded md:bg-transparent md:text-gray-700 md:p-0  hover:bg-slate-200"
                aria-current="page"
              >
                <Icon iconName="usergroup" />
                Nhóm
              </Link>
            </li>
            <li>
              <Link
                to={"/"}
                className="flex flex-col w-[100px] items-center py-2 pl-3 pr-4 text-white  rounded md:bg-transparent md:text-gray-700 md:p-0  hover:bg-slate-200"
                aria-current="page"
              >
                <Icon iconName="video" />
                Video
              </Link>
            </li>
            <li>
              <Link
                to={"/"}
                className="flex flex-col w-[100px] items-center py-2 pl-3 pr-4 text-white  rounded md:bg-transparent md:text-gray-700 md:p-0  hover:bg-slate-200"
                aria-current="page"
              >
                <Icon iconName="chat" />
                Chat
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-5 relative">
          <div
            className="t-header-wrapper_right-notify"
            ref={dropdownRef}
            onClick={() => {
              setIsOpenNotify(!isOpenNotify);
              toggling();
            }}
          >
            <Icon iconName="bell" isPointer />
            {numNotifi !== null && (
              <span className="icon-button__badge">{numNotifi}</span>
            )}
            {isOpenNotify && (
              <CardNotifyList title="Thông báo" notifyList={CardList} />
            )}
          </div>
          <div>
            <Dropdown
              optionsChild={optionsProfile || []}
              typeDropdown="menu"
              handleClick={handleClickProfile}
              iconName={iconNameProfile}
              name={nameUser}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
