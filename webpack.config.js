const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
	module: {
		rules: [
			{test: /(\.scss|\.css)$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						{loader: 'css-loader'},
						{loader: 'sass-loader'},
					],
					publicPath: '/build',
				})
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
