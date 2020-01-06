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
                        app: './src',
                        redx: './src/app/redux',
                        components: './src/app/components',
                        views: './src/app/views',
                        services: './src/app/services'
                    },
                    extensions: ['.js', '.ts', '.tsx', '.ios.js', '.android.js']
                }
            ]
        ]
    };
};
