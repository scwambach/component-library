import { Box } from "@components/Box/Box";
import { ContainerProps } from "@utils/types";

export const Container = ({
  children,
  className,
  componentId,
  containerClass,
  padded,
  testId,
}: ContainerProps) => {
  return (
    <Box
      componentId={componentId}
      testId={testId}
      className={`container${padded ? ` padded` : ""}${
        containerClass ? ` ${containerClass}` : ""
      }${className ? ` ${className}` : ""}`}
    >
      {children}
    </Box>
  );
};
