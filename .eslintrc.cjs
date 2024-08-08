module.exports = {
  extends: '@it-incubator/eslint-config',
  settings: {
    'import/resolver': {
      alias: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'], // Укажите расширения файлов, которые вы используете
        map: [
          ['@', './src'], // Укажите ваш алиас и путь к нему
        ],
      },
    },
  },
  // 'import/no-unresolved': [
  //   'error',
  //   {
  //     ignore: ['^firebase-admin/.+'],
  //   },
  // ],

}