const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require("path");

module.exports = {
  entry: "./src/js/index.js",
  mode: "development",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    static: path.resolve(__dirname, "dist"),
    port: 8080,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.(s?css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: () => [require("autoprefixer")],
              },
            },
          },
          {
            loader: "sass-loader",
          },
        ],
      },
      {
        test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/i,
        type: "asset/resource",
        generator: {
          //filename: 'fonts/[name]-[hash][ext][query]'
          filename: "fonts/[name][ext][query]",
        },
      },
    ],
  },
};
