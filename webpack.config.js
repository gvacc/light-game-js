const path = require('path');

module.exports = {
	mode: "development",
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/elven-scout.js'
	},
	devServer: {
		static: {
			directory: path.join(__dirname, 'dist'),
		},
		compress: false,
		port: 9000,
	},  
	devtool: 'inline-source-map',
	module: {
		rules: [
		{
			test: /\.m?js$/,
			exclude: /(node_modules|bower_components)/,
			use: {
			loader: 'babel-loader',
			options: {
				presets: ['@babel/preset-env']
			}
			}
		}
		]
	}
};