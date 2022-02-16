const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  devtool: "source-map",
  output: {
    filename: "bundle.[hash].js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
  ],
  resolve: {
    modules: [__dirname, "src", "node_modules"],
    extensions: ["*", ".js", ".jsx", ".tsx", ".ts"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules(?!\/@tinqin)/,
        loader: require.resolve("babel-loader"),
      },
      {
        test: /\.js$/,
        exclude: /node_modules(?!\/@tinqin)/,
        loader: require.resolve("babel-loader"),
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(jpg|jpeg|gif|png)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: "2048",
            name: "images/[name].[ext]",
          },
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)/,
        use: {
          loader: "url-loader",
          options: {
            limit: "2048",
            name: "fonts/[name].[ext]",
          },
        },
      },
    ],
  },
};
