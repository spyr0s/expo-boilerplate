module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    settings: {
        'import/resolver': {
            alias: {
                map: [
                    ['app', './src'],
                    ['redx', './src/app/redux'],
                    ['components', './src/app/components'],
                    ['views', './src/views'],
                    ['services', './src/services']
                ],
                extensions: ['.js', '.ts', '.tsx', '.d.ts', '.json']
            }
        }
    },
    extends: [
        '@react-native-community',
        'airbnb-typescript',
        'prettier',
        'prettier/@typescript-eslint',
        'prettier/react'
    ],
    rules: {
        'no-shadow': 0,
        'react/jsx-props-no-spreading': 0
    }
};
