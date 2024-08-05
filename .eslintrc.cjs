module.exports = {
  extends: '@it-incubator/eslint-config',
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  rules: {
    'import/no-unresolved': 'error', // Если это не задано в '@it-incubator/eslint-config'
  },
};
