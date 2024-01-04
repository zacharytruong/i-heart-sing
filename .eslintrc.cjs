const functionalComponentMessage = 'See https://github.com/facebook/create-react-app/pull/8177';

const reactRules = {
  'react/jsx-props-no-spreading': [
    'warn',
    {
      html: 'enforce',
      custom: 'enforce',
      explicitSpread: 'ignore',
    },
  ],
  '@typescript-eslint/ban-types': [
    'error',
    {
      types: {
        'React.FC': functionalComponentMessage,
        FC: functionalComponentMessage,
        'React.FunctionComponent': functionalComponentMessage,
        FunctionComponent: functionalComponentMessage,
      },
    },
  ],
};

const moduleRules = {
  'unused-imports/no-unused-imports': 'warn',
  'unused-imports/no-unused-vars': ['error'],
  'simple-import-sort/imports': 'error',
  'simple-import-sort/exports': 'error',
  'no-duplicate-imports': 'error',
  'no-restricted-imports': [
    'error',
    {
      patterns: [
        {
          group: ['*/_components/*', '*../*'],
          message: 'Please import core modules from the ~/* path alias.',
        },
      ],
    },
  ],
};

const nextRules = {
  '@next/next/no-img-element': 'off',
};

module.exports = {
  extends: ['next/core-web-vitals', 'prettier', 'plugin:@tanstack/eslint-plugin-query/recommended'],
  plugins: ['unused-imports', 'simple-import-sort', '@typescript-eslint', '@tanstack/query'],
  rules: {
    curly: 'error',
    'dot-notation': 'error',
    'prefer-const': 'error',
    'no-var': 'error',
    'no-console': 'warn',
    ...reactRules,
    ...moduleRules,
    ...nextRules,
  },
};
