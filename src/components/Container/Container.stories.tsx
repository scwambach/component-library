import { CSSProperties } from "react";
import { Container as ContainerItem } from "./Container";
import type { Meta, StoryObj } from "@storybook/react";
import { Box } from "@components/Box/Box";

const meta: Meta<typeof ContainerItem> = {
  title: "Components/Container",
  component: ContainerItem,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ContainerItem>;

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

export const Default: Story = {
  args: {
    children: (
      <Box radius={12} shadow={4} style={style}>
        <>BOX</>
      </Box>
    ),
  },
};

export const Narrow: Story = {
  args: {
    containerClass: "narrow",
    children: (
      <Box radius={12} shadow={4} style={style}>
        <>BOX</>
      </Box>
    ),
  },
};

export const Narrower: Story = {
  args: {
    containerClass: "narrower",
    children: (
      <Box radius={12} shadow={4} style={style}>
        <>BOX</>
      </Box>
    ),
  },
};

export const Wide: Story = {
  args: {
    containerClass: "wide",
    children: (
      <Box radius={12} shadow={4} style={style}>
        <>BOX</>
      </Box>
    ),
  },
};

export const Wider: Story = {
  args: {
    containerClass: "wider",
    children: (
      <Box radius={12} shadow={4} style={style}>
        <>BOX</>
      </Box>
    ),
  },
};
