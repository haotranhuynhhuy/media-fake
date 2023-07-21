import React from "react";
import Input, { InputProps } from "../Input";

interface InputPropsWithTypo extends InputProps {
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  content?: string;
  needed?: boolean;
}
const InputTypo: React.FC<InputPropsWithTypo> = ({
  id,
  content,
  type,
  error,
  label,
  variant,
  iconName,
  iconSize,
  handleClickIcon,
  handleChange,
  disabled,
  isPassword,
  readOnly,
  needed,
  name,
  ...props
}) => {
  return (
    <div className="flex md:flex-row flex-col items-center justify-between w-full">
      <p className="font-medium text-lg w-1/3">{content}</p>
      <Input
        id={id}
        isPassword={isPassword}
        label={label}
        handleClickIcon={handleClickIcon}
        iconName={iconName}
        iconSize={iconSize}
        value={props.value}
        onChange={handleChange}
        type={type}
        placeholder={props.placeholder}
        required={needed}
        name={name}
      />
    </div>
  );
};

export default InputTypo;
