const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const htmlRules = {
    test: /\.html$/,
    loader: 'html-loader'
}

const cssRules = {
    test: /\.css$/,
    exclude: /styles.css$/,
    use: ['style-loader','css-loader']
}

const stylesRules = {
    test: /styles.css$/,
    use: [MiniCssExtractPlugin.loader, 'css-loader']
}

const fileRules = {
    test: /\.(png|jpe?g|gif)$/,
    loader: 'file-loader'
}

const rules = [
    htmlRules,
    cssRules,
    stylesRules,
    fileRules
];

const htmlWepackConfig = {
    template: '/src/index.html',
    title: 'mi webpack'
}

const styleExtractConfig = {
    filename: '[name].css',
    ignoreOrder: false
}

const copyWebpackConfig = {
    patterns: [
        {from: 'src/assets/', to: 'assets/'}
    ]
}

module.exports = {
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'build'),
        clean: true
    },
    module:{
        rules
    },
    plugins:[
        new HtmlWebpackPlugin( htmlWepackConfig ),
        new MiniCssExtractPlugin( styleExtractConfig ),
        new CopyWebpackPlugin( copyWebpackConfig )
    ],
    devServer: {
        open: true,
        port: 3000,
        compress: true
    }
}