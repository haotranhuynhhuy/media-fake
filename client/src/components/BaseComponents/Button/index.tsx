import React from "react";

import imgLoading from "assets/images/loading.gif";
import Icon, { IconName, IconSize } from "../Icon";
import { mapModifiers } from "../../../utils/functions";

type Sizes = "h30" | "h36" | "h36-md" | "h56";
type Variant = "primary" | "bgGray" | "white" | "columbia-blue" | "transparent";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  modifiers?: (Variant | Sizes)[];
  iconName?: IconName;
  iconSize?: IconSize;
  textAndIconSpacing?: number;
  sizeImg?: string;
  isLoading?: boolean;
}
const Button: React.FC<ButtonProps> = ({
  children,
  modifiers,
  iconName,
  iconSize,
  textAndIconSpacing,
  name,
  id,
  className,
  isLoading,
  disabled,
  type = "button",
  sizeImg,
  onClick,
}) => (
  <button
    id={id}
    name={name}
    type={type}
    disabled={disabled}
    onClick={onClick}
    className={mapModifiers(
      "a-button",
      modifiers,
      className,
      isLoading && "loading"
    )}
  >
    {isLoading ? (
      <img src={imgLoading} alt="loading" width={sizeImg} height={sizeImg} />
    ) : (
      <>
        {children}
        {iconName && (
          <div
            className="a-button_icon"
            style={{ paddingLeft: `${textAndIconSpacing}px` }}
          >
            <Icon iconName={iconName} size={iconSize} />
          </div>
        )}
      </>
    )}
  </button>
);

Button.defaultProps = {
  modifiers: ["primary", "h36"],
  isLoading: false,
};

export default Button;
