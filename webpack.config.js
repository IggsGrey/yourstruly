const
webpack = require('webpack'),
path = require('path');

let config = {
	entry: ['@babel/polyfill', './src/index.js'],
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							[
								"@babel/preset-env",
								{
									"targets": {
										"node": "10"
									}
								}
							],'@babel/preset-react'
						]
					}
				}
			},
			{
				test: /\.css$/,
				loaders: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(png|jpe?g|gif|svg|mp4)$/i,
				use: [
					{
						loader: 'file-loader',
					},
				],
			},
		]
	},
	output: {
		path: path.resolve(__dirname, 'distributed'),
		filename: `main.js`
	},
	devServer: {
		contentBase: path.resolve(__dirname + '/distributed'),
		compress: true,
		port: 3000,
		historyApiFallback: true
	},
	devtool: 'source-map',
};

module.exports = config;