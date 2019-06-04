module.exports = {
  env: {
    es6: true
  },
  extends: "standard",
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  rules: {
    semi: ["error", "never"],
    indent: ["error", 2]
  }
}
