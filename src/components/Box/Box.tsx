import { ComponentProps } from "@utils/types";
import { CSSProperties, ReactNode } from "react";

interface BoxProps extends ComponentProps {
  children: ReactNode;
  elementTag?: keyof JSX.IntrinsicElements;
  radius?: 4 | 8 | 12;
  overflow?: boolean;
  shadow?: 1 | 2 | 3 | 4;
  role?: string;
  style?: CSSProperties;
}

export const Box = ({
  className,
  testId,
  children,
  shadow,
  overflow,
  componentId,
  radius,
  role,
  style,
  elementTag = "div",
}: BoxProps) => {
  const Element = elementTag as keyof JSX.IntrinsicElements;

  return (
    <Element
      id={componentId}
      style={style}
      role={role}
      data-testid={testId}
      className={`box${shadow ? ` shadow-${shadow}` : ""}${
        radius ? ` radius-${radius}${overflow ? "-overflow" : ""}` : ""
      }${className ? ` ${className}` : ""}`}
    >
      {children}
    </Element>
  );
};
