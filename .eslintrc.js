module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint/eslint-plugin"],
  extends: ["plugin:@typescript-eslint/recommended", "plugin:@typescript-eslint/recommended-type-checked", "plugin:@typescript-eslint/stylistic-type-checked", "prettier"],
  root: true,
  env: {
    es2021: true,
    node: true,
    jest: true,
  },
  ignorePatterns: ["**/jest.config.ts"],
  rules: {
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/explicit-function-return-type": "error",
    "no-else-return": "warn",
    semi: ["warn", "always"],
    "space-unary-ops": "error",
    "@typescript-eslint/array-type": "off",
    "@typescript-eslint/arrow-parens": "off",
    "@typescript-eslint/typedef": [
      "error",
      {
        arrayDestructuring: true,
        arrowParameter: true,
        memberVariableDeclaration: false,
        objectDestructuring: true,
        parameter: true,
        propertyDeclaration: true,
        variableDeclaration: false,
        variableDeclarationIgnoreFunction: true,
      },
    ],
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "interface",
        format: ["PascalCase"],
        prefix: ["I"],
      },
    ],
    "max-classes-per-file": "error",
    "max-len": [
      "error",
      {
        code: 180,
      },
    ],
    "@typescript-eslint/explicit-member-accessibility": "off",
    "no-multiple-empty-lines": ["error", { max: 1, maxEOF: 1 }],
    "no-console": "error",
    "no-empty": "off",
    "@typescript-eslint/no-inferrable-types": ["error"],
    "@typescript-eslint/no-non-null-assertion": "warn",
    "@typescript-eslint/no-redundant-type-constituents": "warn",
    "no-fallthrough": "warn",
    "no-use-before-define": [
      "error",
      {
        functions: true,
        classes: false,
        variables: true,
        allowNamedExports: false,
      },
    ],
    "quote-props": ["warn", "as-needed"],
    "sort-keys": "off",
    quotes: ["warn", "double"],
    "comma-dangle": "off",
  },
};
