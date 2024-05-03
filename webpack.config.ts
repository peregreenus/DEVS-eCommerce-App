import path from "path";
import { Configuration } from "webpack";
import CopyWebpackPlugin from "copy-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import EslingPlugin from "eslint-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import "webpack-dev-server";

const config: Configuration = {
  mode: (process.env.NODE_ENV as "production" | "development") ?? "development",
  entry: { app: "./src/index.tsx" },

  module: {
    rules: [
      {
        test: /.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(sc|sa|c)ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    compareBeforeEmit: true,
  },
  devServer: {
    open: true,
    hot: true,
    port: 8080,
    static: path.join(__dirname, "public"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./src/index.html"),
      filename: "index.html",
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: "./src/assets/", to: "./assets/" }],
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
    new EslingPlugin({ extensions: ["ts", ".tsx"] }),
  ],
};

export default config;
