const merge = require('webpack-merge');
const webpack = require('webpack');
const baseWebpackConfig = require('./webpack.config.base');

module.exports = merge(baseWebpackConfig, {
    mode: 'production',
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                API_HOST: JSON.stringify('http://localhost:3000/api'),
            }
        })
    ],
});
