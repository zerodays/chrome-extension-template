import { fixupConfigRules, fixupPluginRules } from '@eslint/compat';
import pluginJs from '@eslint/js';
import checkFile from 'eslint-plugin-check-file';
import reactHooks from 'eslint-plugin-react-hooks';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';
import sonarjs from 'eslint-plugin-sonarjs';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    plugins: {
      'check-file': checkFile,
      'react-hooks': fixupPluginRules(reactHooks),
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    ignores: [
      '**/node_modules/**',
      '**/dist/**',
      '**/build/**',
      '.prettierrc.cjs',
    ],
  },
  { languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...fixupConfigRules(pluginReactConfig),
  sonarjs.configs.recommended,
  {
    rules: {
      'no-console': 'off',
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-explicit-any': 'error',
      'react/react-in-jsx-scope': 'off',
      'check-file/filename-naming-convention': [
        'error',
        {
          './src/**/*.{jsx,tsx}': 'KEBAB_CASE',
          './src/**/*.{js,ts}': 'KEBAB_CASE',
        },
        { ignoreMiddleExtensions: true },
      ],
      '@typescript-eslint/no-restricted-imports': [
        'error',
        {
          paths: [
            {
              name: 'process',
              message:
                "For environment variables, use `import env from '@/env';`",
            },
          ],
        },
      ],
      'react/jsx-no-literals': [
        'warn',
        {
          noStrings: true,
          ignoreProps: true,
        },
      ],
      ...reactHooks.configs.recommended.rules,
    },
  },
];
