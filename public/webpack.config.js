var path = require("path"),
  webpack = require("webpack"),
  ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry: { //Entry Point for Webpack
        app: ["./Public/js/entry.js", "./Public/sass/entry.sass"]
    },
    output: {
        path: __dirname,
        filename: "bundle.js" //Bundled Javascript Webpack Spits out.
    },
    devServer: { //Allows webpack-dev-server to be live reloaded
        inline: true,
        port: 3333,
        watch: true
    },
    module: {
        loaders: [
            { //Babel loader for converting ES2015 to ES5
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            { //Converts SASS to CSS
                test: /\.sass$/,
                loader: ExtractTextPlugin.extract('css-loader?sourceMap!sass-loader?indentedSyntax')
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("main.css")
    ]
};