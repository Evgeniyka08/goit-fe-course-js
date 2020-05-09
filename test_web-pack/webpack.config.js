const path = require("path");
const webpackMerge = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const loadModeConfig = (env) =>
  require(`./build-utils/${env.mode}.config`)(env);
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
const WebpackBar = require("webpackbar");

module.exports = (env) =>
  webpackMerge(
    {
      mode: env.mode,
      context: path.resolve(__dirname, "src"),

      entry: "./index.js",
      output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].boundle.js",
      },
      module: {
        rules: [
          {
            test: /\.html$/,
            use: "html-loader",
          },
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ["@babel/preset-env"],
              },
            },
          },
        ],
      },

      plugins: [
        new CleanWebpackPlugin(),
        new FriendlyErrorsWebpackPlugin(),
        new WebpackBar(),
      ],
    },
    loadModeConfig(env)
  );
