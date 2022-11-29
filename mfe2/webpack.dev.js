const webpack = require("webpack");
const { merge } = require('webpack-merge');
const path = require('path');
const commonConfig = require('./webpack.common');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const dotenv = require("dotenv");
dotenv.config();

const mapProcessEnv = (data) => {
	const env = {};
	if (data) {
		for (const [key, value] of Object.entries(data)) {
			if (value && key) {
				env[key] = JSON.stringify(value);
			}
		}
	}
	return env;
};


const devConfig = {
	mode: 'development',
	output: {
		publicPath: 'auto',
	},
	devServer: {
		port: 4202,
		historyApiFallback: true,
	},
	devtool: 'eval-cheap-module-source-map',
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
			{
				test: /\.(ts|tsx)$/,
				exclude: /node_modules/,
				use: ['ts-loader'],
			},
			{
				test: /\.(css|scss)$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
			{
				test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
				use: ['file-loader'],
			},
		],
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'public', 'index.html'),
			title: 'React',
			description: 'React',
		}),
		new ProgressBarPlugin(),
		new ModuleFederationPlugin({
			filename: 'remoteEntry.js',
			name: "mfe2",
			exposes: {
				"./Component": "./src/bootstrap.tsx",
			},
			shared: {
				react: {
					singleton: true,
					strictVersion: true,
					requiredVersion: "18.2.0",
				}
			}
		}),
	],
};
devConfig.plugins.push(
	new webpack.DefinePlugin({
		process: { env: { ...mapProcessEnv(process.env) } },
	})
);

module.exports = merge(commonConfig, devConfig);
