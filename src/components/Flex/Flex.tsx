import { Box } from "@components/Box/Box";
import { BreakNames, FlexGridProps } from "@utils/types";

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

export const Flex = ({
  alignItems = "flex-start",
  ariaLabel,
  breakpoint,
  children,
  className,
  columnBreak = "sm",
  componentId,
  customLayout,
  direction = "row",
  elementTag,
  fill,
  gap = "md",
  justifyContent = "flex-start",
  noBreak,
  role,
  style,
  testId,
}: FlexProps) => {
  return (
    <Box
      componentId={componentId}
      testId={testId}
      elementTag={elementTag}
      role={role}
      style={style}
      aria-label={ariaLabel}
      className={`flex direction-${direction} align-${alignItems} justify-${justifyContent} gap-${gap} column-${
        columnBreak && !noBreak ? columnBreak : ""
      }${className ? ` ${className}` : ""}${
        customLayout ? ` ${customLayout}` : ""
      }${breakpoint && !noBreak ? ` break-${breakpoint}` : ""}${
        fill ? " fill" : ""
      }${noBreak ? " no-break" : ""}`}
    >
      {children}
    </Box>
  );
};
