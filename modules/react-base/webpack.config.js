const path = require("path");
const webpack = require("webpack");

module.exports = {
	entry: ["react-hot-loader/patch", "./src/index.js"],
	mode: process.env.NODE_ENV == "production" ? "production" : "development",
	output: {
		filename: path.basename(__dirname) + ".js",
		// Put into root if building for production
		path: path.resolve(__dirname, process.env.NODE_ENV == "production" ? "" : "dist")
	},
	devServer: {
		host: "192.168.1.103",
		hot: true,
		port: 3000,
		writeToDisk: true,
		contentBase: path.resolve(__dirname, "dist"),
		publicPath: "/modules/" + path.basename(__dirname) + "/",

		overlay: {
			errors: true
		},
		open: true,

		// For proxying everything to existing backend
		index: "",
		proxy: {
			context: (uri) => {
				// Do not proxy hmr requests
				if (uri.indexOf("hot-update") >= 0) {
					return false;
				}
				return true;
			},
			target: "http://localhost:8080"
		}
	},
	module: {
		rules: [
			{
				test: /\.jsx?/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						plugins: ["react-hot-loader/babel"],
						presets: ["@babel/preset-env", "@babel/preset-react"]
					}
				}
			},
			{ test: /\.(css|less)$/, use: ["style-loader", "css-loader"] }
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			"process.env.MODULE_NAME": JSON.stringify(path.basename(__dirname))
		})
	]
};
