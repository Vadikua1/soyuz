import pluginVue from 'eslint-plugin-vue';
import js from '@eslint/js';
import globals from 'globals';

export default [
  {
    ignores: ['dist/**', 'node_modules/**', 'vite.config.js'], 
  },
  js.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      'no-console': 'warn',
      'no-unused-vars': 'error',
      'vue/multi-word-component-names': 'off'
    }
  }
];