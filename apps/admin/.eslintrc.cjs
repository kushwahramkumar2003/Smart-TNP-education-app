module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh"],
  rules: {
    // Customize no-unused-vars to ignore variables that start with an underscore
    "@typescript-eslint/no-unused-vars": [
      "warn",
      { varsIgnorePattern: "^_", argsIgnorePattern: "^_" },
    ],
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    // Enforce using "@ts-expect-error" instead of "@ts-ignore"
    "@typescript-eslint/ban-ts-comment": [
      "error",
      {
        "ts-expect-error": "allow-with-description", // allow with an optional description
        "ts-ignore": "allow-with-description", // allow with an optional description for legacy cases
        "ts-nocheck": "allow-with-description",
        "ts-check": "allow-with-description",
      },
    ],
  },
};
