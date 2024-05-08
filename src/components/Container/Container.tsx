import { Box } from "@components/Box/Box";
import { ComponentProps, ContainerClasses } from "@utils/types";
import { ReactNode } from "react";

export interface ContainerProps extends ComponentProps {
  containerClass?: ContainerClasses;
  children: ReactNode;
  padded?: boolean;
}

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
