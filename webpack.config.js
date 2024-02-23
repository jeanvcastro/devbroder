const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const mode = process.env.NODE_ENV || "development";
const path = require("path");

module.exports = {
  mode: mode,
  entry: "./src/js/index.js",
  devtool: "source-map",
  output: {
    clean: true,
    filename: "assets/js/bundle.min.js"
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "assets/css/bundle.min.css"
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      hash: true
      // favicon: "./src/img/favicon.ico"
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "./src/manifest.json",
          to: "manifest.json?[fullhash]"
        },
        {
          from: "./src/img/**/*.{png,jpg,jpeg,gif,svg}",
          to: "assets/img/[name][ext]?[fullhash]"
        }
      ]
    })
  ],

  module: {
    rules: [
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      },
      {
        test: /\.(woff2?|ttf|eot)$/,
        type: "asset/resource",
        generator: {
          filename: "assets/fonts/[name][ext]?[hash]"
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },

  devServer: {
    static: {
      directory: path.join(__dirname, "dist")
    },
    port: 3000
  },

  stats: "errors-only"
};
