// .prettierrc.js

module.exports = {
    printWidth: 80,
    tabWidth: 2,
    useTabs: false,
    semi: true,
    singleQuote: true,
    trailingComma: 'es5',
    bracketSpacing: true,
    arrowParens: 'always',
    proseWrap: 'preserve',
    plugins: ['prettier-plugin-solidity'],
    overrides: [
      {
        files: '*.json',
        options: {
          parser: 'json',
          trailingComma: 'none'
        }
      },
      {
        files: '*.sol',
        options: {
          parser: 'solidity-parse'
        }
      },
      {
        files: '*.html',
        options: {
          parser: 'html'
        }
      },
      {
        files: ['*.jsx', '*.tsx'],
        options: {
          parser: 'babel'
        }
      }
    ]
  };
  