/* eslint @typescript-eslint/no-var-requires: 0 */
const path = require('path');
const globImporter = require('node-sass-glob-importer');
const packageJson = require("./package.json");

module.exports = {
    context: __dirname,
    entry: {
        javascript: './src/index.tsx',
        html: './index.html'
    },
    output: {
        filename: "[name].js",
        chunkFilename: `[name].chunk.${packageJson.version}.js`,
        path: path.join(__dirname, 'dist'),
        publicPath: '/dist/'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.tsx', '.ts', '.json'],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|tsx|ts)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true,
                        },
                    },
                ],
            },
            {
                test: /\.html$/,
                use: 'file-loader?name=[name].[ext]'
            },
            {
                test: /\.css$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'}
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    {loader: "style-loader"},
                    {loader: "css-loader"},
                    {
                        loader: "sass-loader",
                        options: {
                            importer: globImporter()
                        }
                    }
                ]
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                use: 'url-loader?limit=100000'
            }
        ]
    },
};
