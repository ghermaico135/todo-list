/** @format */
/* eslint-disable */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CircularDependencyPlugin = require("circular-dependency-plugin");
const webpack = require("webpack");

module.exports = {
	mode: "development",
	entry: {
		index: "./src/index.js",
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.html",
		}),

		new CircularDependencyPlugin({
			// `onStart` is called at the beginning of the build process
			onStart({ compilation }) {
				console.log("Circular dependency detection started");
			},
			// `onDetected` is called for each circular dependency found
			onDetected({ module: webpackModuleRecord, paths, compilation }) {
				// `paths` contains an array of paths that form the circular dependency
				console.log(`Circular dependency detected: ${paths.join(" -> ")}`);
			},
			// `onEnd` is called at the end of the build process
			onEnd({ compilation }) {
				console.log("Circular dependency detection finished");
			},
		}),
	],
	devServer: {
		static: "./dist",
	},
	output: {
		filename: "[name].bundle.js",
		path: path.resolve(__dirname, "dist"),
		clean: true,
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
			{ test: /\.txt$/, use: "raw-loader" },
		],
	},
};

/* eslint-disable */
