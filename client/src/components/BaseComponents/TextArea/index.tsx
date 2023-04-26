/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-indent */
import React, { forwardRef } from "react";

import { mapModifiers } from "../../../utils/functions";
import Typography from "../Typography";

type Variant = "contact";

interface TextAreaProps {
  id: string;
  label?: string;
  required?: boolean;
  rows?: number;
  placeholder?: string;
  error?: string;
  colorError?: "white";
  value?: string;
  disabled?: boolean;
  name?: string;
  handleOnchange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  modifiers?: GeneralTextStyle[];
  variant?: Variant;
  readOnly?: boolean;
  onKeyPress?: React.KeyboardEventHandler<HTMLTextAreaElement>;
}

const TextAreaRef: React.ForwardRefRenderFunction<
  HTMLTextAreaElement,
  TextAreaProps
> = (
  {
    id,
    label,
    required,
    rows = 4,
    placeholder,
    name,
    error,
    colorError,
    value,
    disabled,
    handleOnchange,
    modifiers,
    variant,
    readOnly = false,
    onKeyPress,
  },
  ref
) => (
  <div className={mapModifiers("a-textarea", modifiers, variant)}>
    {label && (
      <div className="a-textarea_label">
        <label htmlFor={id}>
          <Typography content={label} modifiers={["dimGray", "14x21", "400"]} />
        </label>
        {required && <span className="a-textarea_label-required">*</span>}
      </div>
    )}
    <textarea
      className={mapModifiers(
        "a-textarea_input",
        error && "error",
        modifiers,
        variant
      )}
      value={value}
      ref={ref}
      rows={rows}
      disabled={disabled}
      placeholder={placeholder}
      onChange={handleOnchange}
      id={id}
      readOnly={readOnly}
      name={name}
      onKeyPress={onKeyPress}
    />
    {error && (
      <span className={mapModifiers("a-textarea_error", colorError)}>
        {error}
      </span>
    )}
  </div>
);

const TextArea = forwardRef(TextAreaRef);

export default TextArea;
