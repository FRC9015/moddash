/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line no-undef
const path = require("path");

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "prettier",
    "plugin:storybook/recommended",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "eslint-plugin-react-refresh"],
  settings: {
    react: {
      version: "detect",
    },
  },
  parserOptions: {
    project: path.join(__dirname, "tsconfig.json"),
  },
  ignorePatterns: [
    "node_modules/",
    "dist/",
    "src-tauri/target/",
    "vite.config.ts",
    "*.cjs",
  ],
  env: {
    browser: true,
    node: true,
  },
  rules: {
    "react-refresh/only-export-components": "warn",
    "no-undef": "warn",
    "@typescript-eslint/consistent-type-imports": [
      "warn",
      {
        prefer: "type-imports",
        fixStyle: "inline-type-imports",
      },
    ],
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
  },
  overrides: [
    {
      files: ["*.stories.tsx"],
      rules: {
        "react-refresh/only-export-components": "off",
      },
    },
  ],
};
