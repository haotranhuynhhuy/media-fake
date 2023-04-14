/* eslint-disable react/no-danger */
import React from "react";
import { mapModifiers } from "../../../utils/functions";

type Heading = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type Paragraph = "p" | "span";
type Sizes =
  | "16x28"
  | "14x20"
  | "12x20"
  | "24x29"
  | "64x84"
  | "48x64"
  | "32x48"
  | "28x40"
  | "24x36"
  | "20x32"
  | "20x30"
  | "24x34"
  | "14x21"
  | "16x24"
  | "12x18"
  | "50x36"
  | "50x62"
  | "46x50"
  | "40x36"
  | "12x14"
  | "12x24"
  | "18x32";
export interface TypographyProps {
  type?: Heading | Paragraph;
  content?: string;
  modifiers?: (GeneralTextStyle | Sizes)[];
  children?: React.ReactNode;
  inline?: boolean;
  isDivision?: boolean;
}

const Typography: React.FC<TypographyProps> = ({
  type,
  content,
  modifiers,
  children,
  inline,
  isDivision,
  ...props
}) => {
  const Element = type || "h4";

  if (content) {
    return (
      <Element
        className={mapModifiers("a-typography", modifiers)}
        dangerouslySetInnerHTML={{ __html: content }}
        {...props}
      />
    );
  }

  return (
    <Element
      className={mapModifiers("a-typography", modifiers, inline && "inline")}
      {...props}
    >
      {children}
    </Element>
  );
};

export default Typography;
