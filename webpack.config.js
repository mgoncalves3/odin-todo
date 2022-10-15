const path = require("path");
const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const miniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: {
    main: path.resolve(__dirname, "./src/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.bundle.js",
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new miniCssExtractPlugin()
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "./dist"),
    },
    historyApiFallback: true,
    open: true,
    compress: true,
    hot: true,
    port: 8080,
  },
  module: {
    rules: [
      // Javascript
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: "asset/inline",
      },
      {
        test: /\.(scss|css)$/,
        use: [
          // 'style-loader' bundles CSS together with the main app bundle
          // That may cause performance problems when the bundle get's big
          // { loader: "style-loader" },

          // Adds CSS to the DOM by injecting a `<style>` tag in the html
          { loader: miniCssExtractPlugin.loader },
          { loader: "css-loader" },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: { plugins: () => [require("autoprefixer")] },
            },
          },
          { loader: "sass-loader" },
        ],
      },
    ],
  },
};
