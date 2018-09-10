const webpack = require('webpack');
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const cleanWebpackPlugin = require('clean-webpack-plugin');
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.config.js');
const path = require('path');

const smp = new SpeedMeasurePlugin();

module.exports = smp.wrap(merge(webpackBaseConfig, {
    mode: 'production',
    output: {
        filename: '[name].[chunkhash].js',
        chunkFilename: '[name].[chunkhash].js'
    },
    module: {
        rules: [
            {
                test: /\.(css|less)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
            }
        ]
    },
    plugins: [
        new cleanWebpackPlugin(['docs/*'], {
            root: path.resolve(__dirname, '../')
        }),
        new MiniCssExtractPlugin({
            filename: "[name].[hash].css",
            chunkFilename: "[id].[hash].css"
        }),
        new webpack.HashedModuleIdsPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html'
        }),
        // new BundleAnalyzerPlugin({
        //     analyzerMode: 'static',
        //     reportFilename: '../report/index.html',
        //     defaultSizes: 'parsed',
        //     generateStatsFile: false,
        //     statsFilename: 'stats.json',
        //     logLevel: 'info'
        // })
    ],
    stats: {
        warnings: false
    }
}));
