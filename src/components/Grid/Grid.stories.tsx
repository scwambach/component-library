import { Box } from "@components/Box/Box";
import { Grid as GridItem } from "./Grid";
import type { Meta, StoryObj } from "@storybook/react";
import { CSSProperties } from "react";

const meta: Meta<typeof GridItem> = {
  title: "Components",
  component: GridItem,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof GridItem>;

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

export const Grid: Story = {
  args: {
    columns: 4,
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
        <Box radius={12} shadow={4} style={style}>
          Card 6
        </Box>
        <Box radius={12} shadow={4} style={style}>
          Card 7
        </Box>
        <Box radius={12} shadow={4} style={style}>
          Card 8
        </Box>
        <Box radius={12} shadow={4} style={style}>
          Card 9
        </Box>
        <Box radius={12} shadow={4} style={style}>
          Card 10
        </Box>
        <Box radius={12} shadow={4} style={style}>
          Card 11
        </Box>
        <Box radius={12} shadow={4} style={style}>
          Card 12
        </Box>
      </>
    ),
  },
};
