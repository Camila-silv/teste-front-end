import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import json from '@eslint/json';
import css from '@eslint/css';
import pluginPrettier from 'eslint-plugin-prettier';
import configPrettier from 'eslint-config-prettier';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    plugins: {
      js,
      prettier: pluginPrettier,
    },
    extends: [
      'js/recommended',
      ...tseslint.configs.recommended,
      pluginReact.configs.flat.recommended,
      configPrettier,
    ],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      'prettier/prettier': 'error',

      // 🔒 regras contra any implícito
      '@typescript-eslint/no-explicit-any': 'error', // proíbe usar "any" manualmente
      '@typescript-eslint/no-unsafe-assignment': 'error', // não deixa atribuir valor desconhecido
      '@typescript-eslint/no-unsafe-return': 'error', // não deixa retornar valores não tipados
      '@typescript-eslint/no-unsafe-call': 'error', // não deixa chamar funções sem tipo
      '@typescript-eslint/no-unsafe-member-access': 'error', // não deixa acessar propriedades de "any"
      '@typescript-eslint/explicit-function-return-type': 'warn' // força tipar retorno das funções (bom p/ componentes React)
    },
  },
  {
    files: ['**/*.json'],
    plugins: { json },
    language: 'json/json',
    extends: ['json/recommended'],
  },
  {
    files: ['**/*.css'],
    plugins: { css },
    language: 'css/css',
    extends: ['css/recommended'],
  },
]);
