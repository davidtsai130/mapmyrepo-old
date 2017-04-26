const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
	entry: [
		'whatwg-fetch',
		path.resolve(__dirname, 'src/index.js'),
	],
	// entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js',
	},
	module: {
		rules: [
			{
				test: /(\.scss|\.css)$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						{
							loader: 'css-loader',
							options: {
								modules: true,
								sourceMap: true,
								importLoaders: 1,
								localIdentName: '[name]__[local]___[hash:base64:5]',
							},
						},
						{
							loader: 'postcss-loader'
						},
					],
					publicPath: '/build',
				})
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: 'babel-loader'
			}
		]
	},
	devServer: {
		contentBase: path.join(__dirname, 'build'),
		compress: true,
		open: true,
		stats: 'errors-only',
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			title: 'React App Setup',
			minify: {
				collapseWhitespace: true,
			},
			hash: true,
			inject: 'body',
		}),
		new ExtractTextPlugin({
			filename: 'app.css',
			disable: false,
			allChunks: true,
		}),
	]
}
