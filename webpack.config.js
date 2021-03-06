var address,
	path = require("path"),
	webpack = require("webpack"),
	HtmlWebpackPlugin = require('html-webpack-plugin'),
	autoprefixer = require('autoprefixer'),
	ifaces = require('os').networkInterfaces();

// Finds out your local IP address
for (var dev in ifaces) {
	ifaces[dev].filter((details) => details.family === 'IPv4' && details.internal === false ? address = details.address: undefined);
}
module.exports = {
	resolve: { //Resolves ES2015 Imports
		extensions: ["", ".js", ".jsx"]
	},
	entry: { //Entry Point for Webpack
		app: [
			"./app/entry.js",
			"./app/sass/entry.sass"
		]
	},
	output: {
		path: __dirname + "/dist/",
		filename: "bundle.js",
		publicPath: `http://${address}:3333/`//Bundled Javascript Webpack Spits out.
	},
	devtool: 'source-map',
	devServer: { //Allows webpack-dev-server to be live reloaded
		inline: true,
		hot: true,
		port: 3333,
		watch: true
	},
	module: {
		loaders: [
			{ //Babel loader for converting ES2015 to ES5
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015']
				}
			},
			{ //Converts SASS to CSS
				test: /\.sass$/,
				loader: 'style-loader!css-loader?sourceMap!postcss-loader!resolve-url!sass-loader?indentedSyntax'
			},
			{ //Loads the font files from imports
				test:  /\.(ttf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
				loader: 'file-loader?name=./assets/fonts/[name].[ext]&context=./assets'
			},
			{ //Optimizes Images
				test: /\.(jpe?g|png|gif|svg)$/i,
				loaders: [
					'file?hash=sha512&digest=hex&name=./assets/[hash].[ext]',
					'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false&progressive=true'
				]
			},
			{ //Loads HTML imports/requires
				test: /\.html$/,
				loader: "html"
			}
		]
	},
	//Config for Post-CSS and AutoPrefixer
	postcss: [ autoprefixer({ remove: true, browsers: ['> 5%'] }) ],
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('development')
			}
		}),
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			template: __dirname + "/app/index.html",
			filename: "index.html",
			inject: "head"
		})
	]
};