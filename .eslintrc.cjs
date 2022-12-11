/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    // Разрешить v-html
    'vue/no-v-html': 0,
    // Не успользуемые try / catch / finnaly блоки
    'no-useless-catch': 'off',
    // Чтоб не ругалось на регулярки
    'no-control-regex': 'error',
    // максимум 2 пустых строки
    'no-multiple-empty-lines': [2, { max: 2, maxEOF: 0 }]
  }
}
