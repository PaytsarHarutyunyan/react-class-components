module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    node: true,
    "jest/globals": true
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
    "plugin:jest/recommended"
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: [
    "react",
    "react-refresh",
    "jest",
    "@typescript-eslint",
    "prettier",
    "react-compiler"
  ],
  settings: {
    react: {
      version: "detect"
    }
  },
  rules: {
    'linebreak-style': ['error', 'unix'],
    "prettier/prettier": "error",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "react-compiler/react-compiler": "error"
  }
};

