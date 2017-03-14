var path = require('path');
var webpack = require("webpack");
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var dist = './dist';
var src = './src';

var baseConfig = {
    entry: {
        app: path.resolve(__dirname, src + '/app.js'),
        vendor: ['angular', 'angular-resource']
    },
    output: {
        path: path.resolve(__dirname, dist),
        filename: '[name].js'
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                use: "css-loader"
            })
        }, {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: [
                        ['es2015', {
                            modules: false
                        }]
                    ],
                    plugins: [
                        'angularjs-annotate',
                        'syntax-dynamic-import',
                        'transform-async-to-generator',
                        'transform-regenerator',
                        'transform-runtime'
                    ]
                }
            }]
        }, {
            test: /\.html$/,
            use: [{
                loader: 'html-loader',
                options: {
                    minimize: true
                }
            }]
        }]
    },
    plugins: [
        //new webpack.optimize.UglifyJsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            minChunks: function(module) {
                return module.context && module.context.indexOf("node_modules") !== -1;
            }
        }),
        new ExtractTextPlugin({
            filename: 'styles.css'
        }),
        new HtmlWebpackPlugin({
            template: src + '/index.html'
        })
    ]
};

module.exports = baseConfig;
