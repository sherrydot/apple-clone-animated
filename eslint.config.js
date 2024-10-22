// import js from "@eslint/js";
// import globals from "globals";
// import react from "eslint-plugin-react";
// import reactHooks from "eslint-plugin-react-hooks";
// import reactRefresh from "eslint-plugin-react-refresh";
// import { ReactThreeFiber } from "@react-three/fiber";

// export default [
//   { ignores: ["dist"] },
//   {
//     files: ["**/*.{js,jsx}"],
//     languageOptions: {
//       ecmaVersion: 2020,
//       globals: globals.browser,
//       parserOptions: {
//         ecmaVersion: "latest",
//         ecmaFeatures: { jsx: true },
//         sourceType: "module",
//       },
//     },
//     settings: { react: { version: "18.3" } },
//     plugins: {
//       react,
//       "react-hooks": reactHooks,
//       "react-refresh": reactRefresh,
//       "@react-three",
//     },
//     rules: {
//       ...js.configs.recommended.rules,
//       ...react.configs.recommended.rules,
//       ...react.configs["jsx-runtime"].rules,
//       ...reactHooks.configs.recommended.rules,
//       "react/jsx-no-target-blank": "off",
//       "react-refresh/only-export-components": [
//         "warn",
//         { allowConstantExport: true },
//       ],
//     },
//   },
// ];

import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
// Assuming you are using eslint-plugin-three for Three.js
import three from "eslint-plugin-three";

export default [
  { ignores: ["dist"] },
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    settings: { react: { version: "18.2" } }, // Update version to 18.2
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      three, // Added the Three.js linting plugin
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,
      ...reactHooks.configs.recommended.rules,
      "react/jsx-no-target-blank": "off",
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      // You can add any Three.js specific rules here
      "three/no-new-mesh": "warn",
    },
  },
];
