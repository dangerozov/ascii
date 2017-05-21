var webpack = require('webpack');

module.exports = {
	entry: './ascii.ts',
	output: {
		filename: 'ascii.js'
	},
	devtool: 'source-map',
	resolve: {
		extensions: ['webpack.js', '.web.js', '.ts', '.js']
	},
	module: {
		loaders: [
			{ test: /\.ts$/, loader: 'ts-loader' }
		]
	}
}