const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, "src", "index.tsx"),
  devtool: "source-map",
  optimization: {
    minimizer: [new UglifyJsPlugin()],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json", ".scss"]
  },
  devServer: {
    contentBase: path.join(__dirname, "src"),
    watchContentBase: true,
    historyApiFallback: true
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "index.js",
    publicPath: '/',
    libraryTarget: 'commonjs2',
    library: 'ui-kit-library',
    umdNamedDefine: true
  },
  externals: {      
    react: {          
        commonjs: "react",          
        commonjs2: "react",          
        amd: "React",          
        root: "React"      
    },      
    "react-dom": {          
        commonjs: "react-dom",          
        commonjs2: "react-dom",          
        amd: "ReactDOM",          
        root: "ReactDOM"      
    },
  },
  mode: process.env.NODE_ENV || "development",
  module: {
    rules: [
      {
        // this is so that we can compile any React,
        // ES6 and above into normal ES5 syntax
        test: /\.(js|jsx|ts|tsx)$/,
        // we do not want anything from node_modules to be compiled
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "awesome-typescript-loader",
        query: {
          presets: ["react", "es2015"],
          declaration: false
        }
      },
      {
        test: /\.(css|scss)$/,
        use: [
          "style-loader",
          {
            loader: 'css-loader',
            options: {
                importLoaders: 1,
                localIdentName: '[name]-[local]-[hash:base64:3]',
                modules: true,
            },
          },
          {
            loader: "sass-loader",
            options: {
              data: '@import "./global.scss";',
              includePaths: [__dirname, "./src/scss/"]
            }
          }
        ]
      },
      {
        test: /\.(jpe?g|png|ttf|eot|svg|gif|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loaders: ["file-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html")
    })
  ]
};