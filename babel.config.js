module.exports = api => {
    api.cache(false);
    return {
        presets: ['babel-preset-expo'],
        plugins: [
            [
                'module-resolver',
                {
                    root: ['./src'],
                    alias: {
                        app: './src'
                    },
                    extensions: ['.js', '.ts', '.tsx', '.ios.js', '.android.js']
                }
            ]
        ]
    };
};
