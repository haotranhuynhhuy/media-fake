import React from "react";
import { mapModifiers } from "../../../utils/functions";

export type IconName =
  | "search"
  | "dropDown"
  | "bell"
  | "Earth"
  | "home"
  | "user"
  | "VietNam"
  | "close"
  | "errorOutline"
  | "successOutline"
  | "add"
  | "Korean"
  | "England"
  | "cancel"
  | "chevronLeft"
  | "chevronRight"
  | "hamburger"
  | "dropDown_blue"
  | "clock"
  | "calendar"
  | "doneall"
  | "right"
  | "left_feild"
  | "addInput"
  | "calendar_white"
  | "setting"
  | "tag"
  | "message"
  | "showpass"
  | "hidepass"
  | "logout"
  | "timezone"
  | "drop_up"
  | "loading_notify"
  | "done_notify"
  | "circle_half"
  | "confirm"
  | "cancelimage"
  | "edit"
  | "cancel_notify"
  | "task_notify"
  | "department_list"
  | "edit_dept"
  | "delete_item"
  | "save_all"
  | "right_feild"
  | "dept_mail"
  | "dept_info"
  | "dept_phone"
  | "file"
  | "micro"
  | "sidebar_menu"
  | "addgroup"
  | "download"
  | "playVoice"
  | "pauseVoice";

export type IconSize =
  | "6x12"
  | "8x12"
  | "10x10"
  | "14x14"
  | "16x16"
  | "17x17"
  | "18x18"
  | "20x20"
  | "20x15"
  | "24x24"
  | "28x28"
  | "32x32"
  | "40x40"
  | "80x80"
  | "5x10"
  | "69x72"
  | "34x34"
  | "30x30"
  | "12x12"
  | "25x27"
  | "25x25"
  | "17x12"
  | "21x21"
  | "25x19"
  | "36x36"
  | "22x16"
  | "26x26"
  | "30x30"
  | "44x44"
  | "120x120"
  | "17x19";

interface IconProps {
  iconName: IconName;
  size?: IconSize;
  isPointer?: boolean;
}

const Icon: React.FC<IconProps> = ({ iconName, size, isPointer }) => {
  return (
    <i
      className={mapModifiers("a-icon", iconName, size, isPointer && "pointer")}
    />
  );
};

Icon.defaultProps = {
  size: "24x24",
};

export default React.memo(Icon);
