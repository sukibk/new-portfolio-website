import { FlatCompat } from "@eslint/eslintrc";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});
// const testingLibrary = require("eslint-plugin-testing-library");

const eslintConfig = [
  ...compat.config({
    extends: [
      "next/core-web-vitals",
      "plugin:import/recommended",
      // "plugin:playwright/recommended",
      "plugin:prettier/recommended",
    ],
    plugins: ["simple-import-sort"], //, "testing-library"
    rules: {
      "simple-import-sort/exports": "error",
      "simple-import-sort/imports": "error",
      // "testing-library/await-async-queries": "error",
      // "testing-library/no-await-sync-queries": "error",
      // "testing-library/no-debugging-utils": "warn",
      // "testing-library/no-dom-import": "off",
    },
    overrides: [
      {
        files: ["*.js"],
        rules: {
          "unicorn/prefer-module": "off",
        },
      },
      // {
      // 3) Now we enable eslint-plugin-testing-library rules or preset only for matching testing files!
      // files: [
      //   "**/__tests__/**/*.[jt]s?(x)",
      //   "**/?(*.)+(spec|test).[jt]s?(x)",
      // ],
      // ...testingLibrary.configs["flat/react"],
      // },
    ],
  }),
];

export default eslintConfig;
