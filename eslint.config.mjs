import nextPlugin from "eslint-plugin-next";
import globals from "globals";

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
  {
    ignores: ["node_modules/", ".next/", "dist/"]
  },
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
    plugins: {
      next: nextPlugin
    },
    rules: {
      ...nextPlugin.configs["core-web-vitals"].rules
    }
  }
];
