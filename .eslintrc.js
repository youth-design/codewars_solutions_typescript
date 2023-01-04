module.exports = {
  env: {
    es2021: true,
    node: true,
    jest: true,
  },
  extends: ["standard-with-typescript", "prettier"],
  overrides: [],
  plugins: ["prettier"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
  },
  rules: {
    "prettier/prettier": "error",
  },
};
