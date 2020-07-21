const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: 
     path.resolve(__dirname,'./src/index.jsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].boundle.js"
  },
  module:{
    rules:[
      {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"]
        }
      }
      },
      {
        test: /\.(css|less)$/,
        use: ["style-loader", "css-loader"],
      },
    ]  
    },
  plugins: [
    new HtmlWebpackPlugin({
      title: "首页",
      filename: "main.html",   //,默认为index.html
      template: './src/wiew.html'  //指定写的html 模板路径
    })
  ],
  devServer: {
    contentBase: './dist', // 告诉服务器从哪里提供内容
    port: 8000, // 端口号, 默认是8080
    open: true, 
    hot: true, // 启用 webpack 的模块热替换特性
    // hotOnly: true // 当编译失败之后不进行热更新
},

}