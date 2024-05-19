module.exports = {
  parser: '@babel/eslint-parser',
  requireConfigFile: false,
  parserOptions: {
    project: 'tsconfig.eslint.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  root: true,
  extends: '@react-native/eslint-config',
};
