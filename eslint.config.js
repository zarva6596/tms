import { createConfigForNuxt } from "@nuxt/eslint-config/flat";
import stylisticJs from "@stylistic/eslint-plugin-js";
import stylisticTs from "@stylistic/eslint-plugin-ts";
import onlyWarn from "eslint-plugin-only-warn";
import perfectionist from "eslint-plugin-perfectionist";
import eslintPluginUnicorn from "eslint-plugin-unicorn";
import vueParser from "vue-eslint-parser";

export const customEslintRules = {
  rules: {
    "array-callback-return": ["error", { checkForEach: true }],
    eqeqeq: ["error", "always", { null: "ignore" }],
    curly: "error",
    "import/order": "off",
    "no-console": "warn",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-extraneous-class": "off",
    "vue/max-attributes-per-line": "off",
    "vue/prop-name-casing": "off",
    "vue/attributes-order": ["error", { alphabetical: true }],
    "vue/multi-word-component-names": "off",
    "vue/block-order": ["error", { order: ["template", "script", "style"] }],
    "vue/html-self-closing": [
      "error",
      {
        html: {
          void: "always",
          normal: "always",
          component: "always",
        },
        svg: "always",
        math: "always",
      },
    ],
    "vue/first-attribute-linebreak": [
      "error",
      {
        singleline: "ignore",
        multiline: "below",
      },
    ],

    "vue/component-name-in-template-casing": [
      "error",
      "kebab-case",
      {
        registeredComponentsOnly: false,
        ignores: [
          "Menu",
          "MenuButton",
          "Dialog",
          "DialogPanel",
          "Disclosure",
          "DisclosurePanel",
          "DisclosureButton",
          "DialogTitle",
          "TransitionChild",
          "TransitionRoot",
          "MenuItem",
          "MenuItems",
          "Bars3Icon",
          "XMarkIcon",
          "FontAwesome",
        ],
      },
    ],
    "vue/order-in-components": [
      "warn",
      {
        order: [
          "el",
          "name",
          "key",
          "parent",
          "functional",
          ["delimiters", "comments"],
          ["components", "directives", "filters"],
          "extends",
          "mixins",
          ["provide", "inject"],
          "ROUTER_GUARDS",
          "layout",
          "middleware",
          "validate",
          "scrollToTop",
          "transition",
          "loading",
          "inheritAttrs",
          "model",
          ["props", "propsData"],
          "emits",
          "setup",
          "fetch",
          "asyncData",
          "data",
          "head",
          "computed",
          "watch",
          "watchQuery",
          "LIFECYCLE_HOOKS",
          "methods",
          ["template", "render"],
          "renderError",
        ],
      },
    ],
  },
};

export const customIgnores = {
  ignores: ["**/node_modules", "**/public", "**/vendor", "**/dist", "**/.nuxt"],
};

const configUnicornRecommended =
  eslintPluginUnicorn.configs["flat/recommended"];

const customUnicornRules = {
  rules: {
    "unicorn/consistent-function-scoping": "off",
    "unicorn/filename-case": "off",
    "unicorn/prefer-module": "off",
    "unicorn/prevent-abbreviations": "off",
    "unicorn/no-null": "off",
  },
};

const configPerfectionist = {
  plugins: {
    perfectionist,
  },
  rules: {
    "perfectionist/sort-imports": [
      "error",
      {
        groups: [
          "type",
          ["builtin", "external"],
          "internal-type",
          "internal",
          ["parent-type", "sibling-type", "index-type"],
          ["parent", "sibling", "index"],
          "object",
          "unknown",
        ],
        customGroups: {
          value: {},
          type: {},
        },
        newlinesBetween: "always",
        internalPattern: ["~/**"],
        type: "natural",
        order: "asc",
        ignoreCase: false,
      },
    ],
  },
};

const configOnlyWarn = {
  plugins: {
    onlyWarn,
  },
};

const customStylisticRules = {
  plugins: {
    "@stylistic/js": stylisticJs,
    "@stylistic/ts": stylisticTs,
  },
  rules: {
    "@stylistic/js/array-bracket-newline": ["error", "consistent"],
    "@stylistic/js/array-element-newline": ["error", "consistent"],
    "@stylistic/js/function-call-argument-newline": ["error", "consistent"],
    "@stylistic/js/function-call-spacing": ["error", "never"],
    "@stylistic/js/function-paren-newline": ["error", "consistent"],
    "@stylistic/js/no-mixed-operators": "error",
    "@stylistic/js/nonblock-statement-body-position": ["error", "below"],
    "@stylistic/js/object-curly-newline": ["error", { consistent: true }],
    "@stylistic/js/object-curly-spacing": ["error", "always"],
    "@stylistic/js/switch-colon-spacing": "error",
    "@stylistic/js/quotes": ["error", "double"],
    "@stylistic/ts/quotes": ["error", "double"],
  },
};

export const eslintConfigNuxt = [
  customEslintRules,
  customIgnores,
  configUnicornRecommended,
  customUnicornRules,
  configPerfectionist,
  configOnlyWarn,
  customStylisticRules,
];

export default createConfigForNuxt().append([
  {
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: "@typescript-eslint/parser",
        emitDecoratorMetadata: true,
        experimentalDecorators: true,
      },
    },
  },
  ...eslintConfigNuxt,
]);
