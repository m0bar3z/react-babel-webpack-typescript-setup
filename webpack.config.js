import HtmlWebpackPlugin from "html-webpack-plugin";
import { resolve as _resolve } from "path";

export const entry = "./src/index.tsx";
export const mode = "development";
export const output = {
  filename: "bundle.[fullhash].js",
  path: _resolve(__dirname, "dist")
};
export const plugins = [
  new HtmlWebpackPlugin({
    template: "./src/index.html"
  })
];
export const resolve = {
  modules: [__dirname, "src", "node_modules"],
  extensions: ["*", ".js", ".jsx", ".tsx", ".ts"]
};
export const module = {
  rules: [
    {
      test: /\.(js|ts)x?$/,
      exclude: /node_modules/,
      use: ["babel-loader"]
    },
    {
      test: /\.css$/,
      exclude: /node_modules/,
      use: ["style-loader", "css-loader"]
    },
    {
      test: /\.(png|svg|jpg|gif)$/,
      exclude: /node_modules/,
      use: ["file-loader"]
    }
  ]
};