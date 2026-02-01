// @ts-check
import tseslint from "typescript-eslint";
import stylistic from "@stylistic/eslint-plugin";
import withNuxt from "./.nuxt/eslint.config.mjs";
import vueParser from "vue-eslint-parser";

export default withNuxt(...tseslint.configs.recommended, {
    languageOptions: {
        parser: vueParser,
        parserOptions: {
            parser: tseslint.parser,
            ecmaVersion: "latest",
            sourceType: "module",
        },
    },
    plugins: { "@stylistic": stylistic }, rules: {
        "@stylistic/semi": ["error", "always"],
        "@stylistic/quotes": ["error", "double"],
        "eqeqeq": ["error", "always"],
        "@stylistic/comma-dangle": ["error", "always-multiline"],
        "no-console": "warn",
        "@stylistic/arrow-parens": ["error", "always"],
        "@stylistic/indent": ["error", 4],
        "no-unused-vars": "warn",
        "prefer-const": "error",
        "no-var": "error",
        "@stylistic/object-curly-spacing": ["error", "always"],
        "curly": ["error", "all"],
        "@stylistic/keyword-spacing": ["error", {
            before: true, after: true,
        }],
        "@stylistic/spaced-comment": ["error", "always"],
        "@stylistic/no-multiple-empty-lines": ["error", {
            max: 1,
        }],
        "arrow-body-style": ["error", "always"],
        "@stylistic/jsx-quotes": ["error", "prefer-double"],
        "no-duplicate-imports": "error",
        "no-shadow": "error",
        "yoda": ["error", "never"],
        "@stylistic/eol-last": ["error", "always"],
    },
});
