const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const fileExtensions = [
	'jpg',
	'png',
	'gif',
	'svg',
	'woff',
	'woff2',
	'eot',
	'ttf',
	'otf',
];

module.exports = {
	entry: './src/index.tsx',
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	// Resolvers, for example, you can do 'Utils' instead of '../../utils'
	resolve: {
		alias: {
			Utils: path.resolve(__dirname, 'src/utils'),
			'react-dom': '@hot-loader/react-dom',
		},
		extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
				include: path.resolve(__dirname, 'src'),
			},
			{
				test: /\.(ts|js)x?$/,
				use: ['babel-loader'],
				include: path.resolve(__dirname, 'src'),
			},
			{
				test: new RegExp(`.(${fileExtensions.join('|')})$`),
				use: ['file-loader'],
				include: path.resolve(__dirname, 'src'),
			},
			{
				test: /\.html$/,
				use: ['html-loader'],
				include: path.resolve(__dirname, 'src'),
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({ template: 'src/index.html', minify: true }),
		new CleanWebpackPlugin(),
	],
};
