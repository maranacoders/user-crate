// Path: /.eslintrc.js

module.exports = {
  extends: ['airbnb'],
  rules: {
    'react/jsx-filename-extension': 'off',
    'no-use-before-define': ['error', { functions: false, classes: false }],
    'no-console': 'off',
    'no-param-reassign': ['error', { props: false }],
    'react/prop-types': 0,
    'no-nested-ternary': 0,
    'react/no-array-index-key': 0,
    'linebreak-style': 0
  },
};
