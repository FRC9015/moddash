import type { Preview } from "@storybook/react";

import "../src/styles.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: "white",
      values: [
        { name: "white", value: "#ffffff" },
        { name: "grey-50", value: "#f9fafb" },
        { name: "grey-100", value: "#f3f4f6" },
      ],
    },
    layout: "centered",
  },
};

export default preview;
