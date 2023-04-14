import React from "react";
import { mapModifiers } from "../../../utils/functions";

interface LoadingProps {
  isShow?: boolean;
  variant?: "fullScreen" | "default";
  size?: "large" | "medium" | "small";
}

const Loading: React.FC<LoadingProps> = ({ isShow, variant, size }) => {
  const classModify = () => mapModifiers("a-loader-circle", variant, size);

  return (
    <div className={isShow ? classModify() : "a-loader-circle-hide"}>
      <div className="loader-wrapper">
        <div className="loader-general">
          <div className="loader-circle" />
          <div className="loader-circle" />
          <div className="loader-circle" />
          <div className="loader-shadow" />
          <div className="loader-shadow" />
          <div className="loader-shadow" />
        </div>
      </div>
    </div>
  );
};

Loading.defaultProps = {
  size: "medium",
};

export default Loading;
