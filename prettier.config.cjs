/* eslint-disable */
module.exports = {
  tabWidth: 2,
  semi: true,
  singleQuote: false,
  trailingComma: "es5",
  printWidth: 80,
  arrowParens: "always",

  plugins: [
    "@trivago/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],
  pluginSearchDirs: false,

  /** IMPORT SORT OPTIONS */
  importOrder: ["<THIRD_PARTY_MODULES>", "^@/(.*)", "^[./]"],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
