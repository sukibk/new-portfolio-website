import { FlatCompat } from "@eslint/eslintrc";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: [
      "next/core-web-vitals",
      "plugin:import/recommended",
      "plugin:playwright/recommended",
      "plugin:prettier/recommended",
    ],
    plugins: ["simple-import-sort"],
    rules: {
      "simple-import-sort/exports": "error",
      "simple-import-sort/imports": "error",
    },
    overrides: [
      {
        files: ["*.js"],
        rules: {
          "unicorn/prefer-module": "off",
        },
      },
    ],
  }),
];

export default eslintConfig;
