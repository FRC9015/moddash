module.exports = {
  tabWidth: 2,
  semi: true,
  singleQuote: false,
  trailingComma: "es5",
  printWidth: 100,
  arrowParens: "always",

  plugins: ["@trivago/prettier-plugin-sort-imports", "prettier-plugin-tailwindcss"],
  pluginSearchDirs: false,

  /** IMPORT SORT OPTIONS */
  importOrder: ["<THIRD_PARTY_MODULES>", "^@lucidstorage/(.*)$", "^[./]"],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
