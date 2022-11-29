const webpack = require("webpack");
const {
  withModuleFederationPlugin,
  share,
} = require("@angular-architects/module-federation/webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ProgressBarPlugin = require("progress-bar-webpack-plugin");
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

const config = withModuleFederationPlugin({
  name: "mfe1",
  exposes: {
    "./Component": "./src/bootstrap.ts",
  },
  shared: share({
    "@angular/core": {
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    },
    "@angular/common": {
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    },
    "@angular/common/http": {
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    },
    "@angular/router": {
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    },
  }),
});

config.plugins.push(
  new webpack.DefinePlugin({
    process: { env: { ...mapProcessEnv(process.env) } },
  })
);

config.plugins.push(new CleanWebpackPlugin());
config.plugins.push(new ProgressBarPlugin());

delete config.plugins[0]._options.library;
config.output.scriptType = "text/javascript";
config.devtool='eval-cheap-module-source-map';
  module.exports = config;
