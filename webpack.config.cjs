const path = require('path')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
// const HtmlWebpackPugPlugin = require('html-webpack-pug-plugin')

module.exports = {
    mode: 'production',
    entry: {
        main: path.resolve(__dirname, 'chart/chart.js')
    },
    output: {
        path: path.resolve(__dirname, 'build/assets/js/chart'),
        filename: 'chart.js',
        clean: true
    },
    // // loaders
    // module: {
    //     rules: [
    //         {test: /\.s[ac]ss$/i, use: ['style-loader', 'css-loader', 'sass-loader']},
    //     ]
    // },
    // // plugins
    // plugins: [
    //     new HtmlWebpackPlugin({
    //         filename: 'index.pug',
    //         template: path.resolve(__dirname, 'src/template.pug')
    //     }),
    //     // new HtmlWebpackPugPlugin()
    // ]
}