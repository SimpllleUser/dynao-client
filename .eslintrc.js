module.exports = {
    root: true,
    env: {
        node: true,
        browser: true,
    },
    extends: [
        'plugin:vue/vue3-recommended',
        'airbnb-base',
        'prettier',
        'plugin:vue/recommended',
        'eslint:recommended',
        'plugin:prettier/recommended',
        'eslint:recommended',
    ],
    rules: {
        'prettier/prettier': 'error',
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    },
    globals: {
        $nuxt: true,
    },
    parserOptions: {
        parser: '@babel/eslint-parser',
        requireConfigFile: false,
    },
}
