import js from '@eslint/js';

export default [
  js.configs.recommended,
  {
    files: ['js/main.js', 'js/page.js', 'js/pageData.js', 'js/images.js', 'js/diary.js', 'js/ogod.js', 'js/analytics.js'],
    languageOptions: {
      ecmaVersion: 2024,
      sourceType: 'script',
      globals: {
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
        $: 'readonly',
        jQuery: 'readonly',
        Page: 'writable',
        currentPage: 'writable',
        changeHeader: 'writable',
        pageData: 'readonly',
        ImageManager: 'writable',
        DiaryManager: 'writable',
        ga: 'readonly',
        pages: 'writable',
        _last: 'readonly',
        setInterval: 'readonly',
        replacePlaceholders: 'writable'
      }
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-undef': 'error',
      'prefer-const': 'warn',
      'no-var': 'warn',
      'no-console': 'off',
      'no-redeclare': 'warn'
    }
  },
  {
    ignores: [
      'node_modules/**',
      'css/vendor/**',
      'js/vendor/**',
      'js/sketches/**',
      'dependencies/**',
      'js/legacy.js',
      'js/test/**'
    ]
  }
];