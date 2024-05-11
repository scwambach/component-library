import { CSSProperties, ReactNode } from "react";

export type BreakNames =
  | "none"
  | "xxs"
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "xxl";

export type Colors = "red" | "blue" | "green" | "orange" | "black" | "white";

export type AlertTypes = "success" | "warning" | "error" | "info";

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export type ColumnSize = 1 | 2 | 3 | 4 | 5 | 6;

export type Gaps = BreakNames | "none" | "micro" | "mega";

export type ButtonTypes = "button" | "submit" | "reset" | "link";

export type FieldTypes =
  | "checkbox"
  | "date"
  | "datetime-local"
  | "email"
  | "hidden"
  | "month"
  | "multiselect"
  | "number"
  | "password"
  | "radio"
  | "select"
  | "tel"
  | "text"
  | "textarea"
  | "search"
  | "color"
  | "time"
  | "url"
  | "week"
  | string;

export interface FormDataProps {
  [key: string]: string | string[];
}

export interface SetFormDataProps {
  (formData: FormDataProps): void;
}

export type ContainerClasses =
  | "wider"
  | "wide"
  | "normal"
  | "narrow"
  | "narrower"
  | "full";

export type Themes = "primary" | "secondary" | "tertiary";

export type Elements =
  | "div"
  | "section"
  | "article"
  | "aside"
  | "span"
  | "header"
  | "footer"
  | "nav"
  | "main"
  | "li"
  | "ul"
  | "ol"
  | "p"
  | "a"
  | "button"
  | "form"
  | "input"
  | "label"
  | "select"
  | "textarea"
  | "img"
  | "picture"
  | "cite"
  | "figure"
  | "figcaption"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6";

export interface ComponentProps {
  _type?: string;
  _key?: string;
  className?: string;
  testId?: string;
  componentId?: string;
}

export interface FlexGridProps extends ComponentProps {
  children: ReactNode;
  elementTag?: Elements;
  role?: string;
  ariaLabel?: string;
  style?: CSSProperties;
  gap?: Gaps;
}

export interface FlexProps extends FlexGridProps {
  center?: boolean;
  breakpoint?: BreakNames;
  columnBreak?: BreakNames;
  noBreak?: boolean;
  direction?: "row" | "column" | "row-reverse" | "column-reverse";
  fill?: boolean;
  alignItems?: "center" | "flex-start" | "flex-end" | "stretch";
  justifyContent?:
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-between"
    | "space-around";
  customLayout?:
    | `one-third-two-thirds`
    | `two-thirds-one-third`
    | `one-quarter-three-quarters`
    | `three-quarters-one-quarter`;
}

export interface FlexProps extends FlexGridProps {
  center?: boolean;
  breakpoint?: BreakNames;
  columnBreak?: BreakNames;
  noBreak?: boolean;
  direction?: "row" | "column" | "row-reverse" | "column-reverse";
  fill?: boolean;
  alignItems?: "center" | "flex-start" | "flex-end" | "stretch";
  justifyContent?:
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-between"
    | "space-around";
  customLayout?:
    | `one-third-two-thirds`
    | `two-thirds-one-third`
    | `one-quarter-three-quarters`
    | `three-quarters-one-quarter`;
}

export interface ContainerProps extends ComponentProps {
  containerClass?: ContainerClasses;
  children: ReactNode;
  padded?: boolean;
}

export interface BoxProps extends ComponentProps {
  children: ReactNode;
  elementTag?: keyof JSX.IntrinsicElements;
  radius?: 4 | 8 | 12;
  overflow?: boolean;
  shadow?: 1 | 2 | 3 | 4;
  role?: string;
  style?: CSSProperties;
}

export interface GridProps extends FlexGridProps {
  columns?: ColumnSize;
}
