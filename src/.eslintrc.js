// Path: /.eslintrc.js

module.exports = {
  extends: ['airbnb'],
  rules: {
    'react/jsx-filename-extension': 'off',
    'no-use-before-define': ['error', { functions: false, classes: false }],
    'no-console': 'off',
    'no-param-reassign': ['error', { props: false }],
  },
};
