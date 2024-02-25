import HtmlWebpackPlugin from "html-webpack-plugin";
import { resolve as _resolve } from "path";
import path from 'path';
const __dirname = path.resolve();

export default {
  entry: "./src/index.tsx",
  mode: "development",
  output: {
    filename: "bundle.[fullhash].js",
    path: path.join(__dirname, "dist")
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ],
  resolve: {
    modules: [__dirname, "src", "node_modules"],
    extensions: ["*", ".js", ".jsx", ".tsx", ".ts"]
  },
  module: {
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
  }
};