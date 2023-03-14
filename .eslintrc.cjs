// eslint-disable-next-line no-undef
module.exports = {
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "plugin:react/recommended", "plugin:react/jsx-runtime", "prettier", "plugin:storybook/recommended"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "eslint-plugin-react-refresh"],
  settings: {
    react: {
      version: "detect"
    }
  },
  env: {
    browser: true,
    node: true
  },
  rules: {
    "react-refresh/only-export-components": "warn",
    "no-undef": "warn"
  }
};