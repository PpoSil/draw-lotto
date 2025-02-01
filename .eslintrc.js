// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: ['expo', 'prettier'],
  plugins: ['prettier', 'styled-components-a11y'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        semi: true,
        singleQuote: true,
        tabWidth: 2,
      },
    ],
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['@hooks', './hooks']],
        extensions: ['.js', '.jsx'],
      },
    },
  },
};
