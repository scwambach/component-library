import { Box } from "@components/Box/Box";
import { Flex as FlexItem } from "@components/Flex/Flex";
import type { Meta, StoryObj } from "@storybook/react";
import { CSSProperties } from "react";

const meta: Meta<typeof FlexItem> = {
  title: "Components/Flex",
  component: FlexItem,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof FlexItem>;

const style = {
  backgroundColor: "var(--primary)",
  color: "var(--white)",
  textAlign: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  height: "200px",
} as CSSProperties;

export const Typical: Story = {
  args: {
    alignItems: "center",
    justifyContent: "center",
    gap: "sm",
    children: (
      <>
        <Box radius={12} shadow={4} style={{ ...style, width: "200px" }}>
          Card 1
        </Box>
        <Box radius={12} shadow={4} style={{ ...style, width: "200px" }}>
          Card 2
        </Box>
        <Box radius={12} shadow={4} style={{ ...style, width: "200px" }}>
          Card 3
        </Box>
        <Box radius={12} shadow={4} style={{ ...style, width: "200px" }}>
          Card 4
        </Box>
        <Box radius={12} shadow={4} style={{ ...style, width: "200px" }}>
          Card 5
        </Box>
      </>
    ),
  },
};

export const Column: Story = {
  args: {
    direction: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "sm",
    children: (
      <>
        <Box radius={12} shadow={4} style={{ ...style, width: "200px" }}>
          Card 1
        </Box>
        <Box radius={12} shadow={4} style={{ ...style, width: "200px" }}>
          Card 2
        </Box>
        <Box radius={12} shadow={4} style={{ ...style, width: "200px" }}>
          Card 3
        </Box>
        <Box radius={12} shadow={4} style={{ ...style, width: "200px" }}>
          Card 4
        </Box>
        <Box radius={12} shadow={4} style={{ ...style, width: "200px" }}>
          Card 5
        </Box>
      </>
    ),
  },
};

export const Fill: Story = {
  args: {
    alignItems: "center",
    justifyContent: "center",
    fill: true,
    gap: "sm",
    children: (
      <>
        <Box radius={12} shadow={4} style={style}>
          Card 1
        </Box>
        <Box radius={12} shadow={4} style={style}>
          Card 2
        </Box>
        <Box radius={12} shadow={4} style={style}>
          Card 3
        </Box>
        <Box radius={12} shadow={4} style={style}>
          Card 4
        </Box>
        <Box radius={12} shadow={4} style={style}>
          Card 5
        </Box>
      </>
    ),
  },
};

export const CustomLayout: Story = {
  args: {
    alignItems: "center",
    justifyContent: "center",
    gap: "sm",
    fill: true,
    breakpoint: "md",
    customLayout: "one-quarter-three-quarters",
    children: (
      <>
        <Box radius={12} shadow={4} style={style}>
          Card 1
        </Box>
        <Box radius={12} shadow={4} style={style}>
          Card 2
        </Box>
      </>
    ),
  },
};
