import type { Preview } from "@storybook/react";
import "./storybook.css";
import "../src/styles/main.scss";
import DocumentationTemplate from "./DocumentationTemplate.mdx";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      page: DocumentationTemplate,
    },
  },
};

export default preview;
