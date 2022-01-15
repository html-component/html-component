module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['airbnb-base', 'plugin:@typescript-eslint/eslint-recommended'],
  rules: {
    'no-empty': 'warn',
    'no-unreachable': 'warn',
    'use-isnan': 'warn',
    eqeqeq: 'warn',
    'no-alert': 'warn',
    'no-else-return': 'warn',
    'no-multi-spaces': 'warn',
    'no-self-compare': 'warn',
    'no-useless-return': 'warn',
    'no-undef-init': 'warn',
    'no-unused-vars': 'warn',
    'no-use-before-define': 'warn',
    'no-plusplus': 'warn',
    'no-trailing-spaces': 'warn',
    'semi-spacing': 'warn',
    'linebreak-style': ['error', 'windows'],
    'no-console': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'comma-dangle': 'off',
    'no-useless-constructor': 'off',
    'max-classes-per-file': 'off',
  },
};
