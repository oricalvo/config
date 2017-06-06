const path = require('path');

module.exports = {
    entry: './main.ts',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.ts?/,
                loader: "ts-loader",
            }
        ]
    }
};
