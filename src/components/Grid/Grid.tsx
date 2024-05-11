import { Box } from "../Box/Box";
import { GridProps } from "../../utils/types";

export const Grid = ({
  ariaLabel,
  children,
  className,
  columns = 3,
  componentId,
  elementTag,
  gap,
  role,
  style,
  testId,
}: GridProps) => {
  return (
    <Box
      role={role}
      elementTag={elementTag}
      aria-label={ariaLabel}
      componentId={componentId}
      style={style}
      className={`grid gap-${gap} columns-${columns}${className ? ` ${className}` : ""}`}
      testId={testId}
    >
      {children}
    </Box>
  );
};
