// eslint-disable-next-line no-undef
module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "prettier",
  ],

  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "eslint-plugin-react-refresh"],

  settings: {
    react: {
      version: "detect",
    },
  },

  rules: {
    "react-refresh/only-export-components": "warn",
    "no-undef": "warn",
  },
};
