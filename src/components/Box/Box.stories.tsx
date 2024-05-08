import { Box as BoxItem } from "@components/Box/Box";
import type { Meta, StoryObj } from "@storybook/react";
import { CSSProperties } from "react";

const meta: Meta<typeof BoxItem> = {
  title: "Components/Box",
  component: BoxItem,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof BoxItem>;

const style = {
  backgroundColor: "var(--primary)",
  color: "var(--white)",
  textAlign: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  height: "400px",
  maxWidth: "500px",
} as CSSProperties;

export const Default: Story = {
  args: {
    style,
    children: <span>This is a box</span>,
  },
};

export const Rounded: Story = {
  args: {
    style,
    children: <span>This is a box</span>,
    overflow: true,
    radius: 12,
  },
};

export const Shadow: Story = {
  args: {
    style,
    children: <span>This is a box</span>,
    overflow: true,
    radius: 12,
    shadow: 4,
  },
};
