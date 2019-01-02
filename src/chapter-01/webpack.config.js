module.exports = {

	devtool: 'eval-source-map',

	entry: [
		'./src/index.js'
	],
	output: {
		path: __dirname + '/public',
		filename: "bundle.js"
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loader: 'babel',
				exclude: /node_modules/,
				query: {
					presets: ['es2015', 'react']
				}
			}
		]
	},

	devServer: {
		inline: true,
		port: 7777,
		contentBase: __dirname + '/public/'
	}
};