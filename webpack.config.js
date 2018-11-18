const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const bundleExtractPlugin = new ExtractTextPlugin({
    filename: 'css/bundle.css',
});

module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                test    : /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test    : /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test    : /\.(png|jpg|gif)$/,
                loader  : 'url-loader?limit=8192'
            },
            {
                test    : /\.(ttf|otf|eot|svg|woff2?)(\?[a-z0-9]+)?$/,
                loader  : 'file-loader'
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
        path: __dirname + '/build',
        publicPath: '',
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
        new ExtractTextPlugin({filename:'bundle.css'})
    ],
    devServer: {
        contentBase: './src',
        hot: true,
        port: 3000
    }
};
