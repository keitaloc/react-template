module.exports = {
  semi: true,
  bracketSpacing: true,
  bracketSameLine: true,
  trailingComma: "all",
  jsxSingleQuote: true,
  tabWidth: 2,
  importOrder: [
    "react",
    "assets",
    "hook|service|helper|lodash",
    "store|constant|type",
    "component|page",
    "*",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
