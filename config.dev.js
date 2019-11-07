const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	entry: {
		main: './src/main.jsx',
	},
	devtool: 'inline-source-map',
	mode: 'development',
	plugins: [
		new webpack.ProvidePlugin({
            $: "jquery",
			jQuery: "jquery",
			"window.jQuery": "jquery",
			React: 'react',
			ReactDOM: 'react-dom',
			Component: ['react','Component'],
			_: 'loadsh',
			$conf: path.resolve('./config.yml')
        }),
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			title: '混迹零柒叁壹的堕落街',
			template: 'src/html/index.html',
		}),
		// Static file copy 
		new CopyWebpackPlugin([
			{from: 'src/favicon.ico',to: 'favicon.ico'}
		]),
		new webpack.HotModuleReplacementPlugin(),
		// OccurrenceOrderPlugin is needed for webpack 1.x only
		new webpack.optimize.OccurrenceOrderPlugin(),
		// Use NoErrorsPlugin for webpack 1.x
		new webpack.NoEmitOnErrorsPlugin(),
	],
	output: {
		path: path.resolve(__dirname,'dist'),
		// filename: "main.js",
		filename: 'js/[name].bundle.js',
		publicPath: '/'
	},
	node: {
		fs: 'empty'
	},
	devServer: {
		contentBase: './dist',
		compress: true,
		port: 9000,
		hot: true,
	},
	resolve: {
		extensions: ['.js', '.jsx'],
    },
	module: {
		rules: [
			{
				test: /\.(jsx|js)$/,
				exclude: /(node_modules)/,
				resolve: {
				  extensions: [".jsx",".js"]
				},
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
						plugins: ['@babel/plugin-transform-react-jsx'],
					}
				}
			},
			{
				test: /\.css$/,
				use: ['style-loader','css-loader']
			},
			{
				test: /\.scss$/,
				use: ['style-loader','css-loader','sass-loader']
			},
			{
				test: /\.(jpg|png|gif|svg)$/,
				use: ['url-loader']
			},
			{
				test: /\.(ttf|woff|woff2|eot|otf)$/,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]',
					outputPath: 'fonts'
				}
			},
			{
				test: /\.(mkv|mp4|mp3|flac|avi)$/,
				use: ['file-loader']
			},
			{
				test: /\.csv$/,
				use: ['csv-loader']
			},
			{
				test: /\.xml$/,
				use: ['xml-loader']
			},
			{
				test: /\.(txt)$/,
				use: ['raw-loader']
			},
			{
				test: /\.(svgraw)$/,
				use: [
					{loader: 'babel-loader',},
					{
						loader: '@svgr/webpack',
						options: {
							babel: false,
							icon: true,
						},
					},
				]
			},
			{
				test: /\.yml$/,
				use: [
					{
						loader: 'json-loader'
					},
					{
						loader: path.resolve('./tools/yaml-loader.js')
					}
				]
			}
		],
	},
}

