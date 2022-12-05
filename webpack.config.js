module.exports = {
	module: {
		rules: [
			{
				test: /\.css$/i,
				loader: "css-loader",
				options: {
					url: false,
					import: true,
				},
			},
		],
	},
};