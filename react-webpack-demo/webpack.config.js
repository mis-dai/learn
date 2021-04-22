const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");


module.exports = {
  entry: 
    path.resolve(__dirname,'./src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].boundle.js",
    publicPath: '/'
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
      // postcss 自动添加css的兼容前缀 即各个浏览器的兼容写法 -webcahi  之类
      {
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', 
          // {
          //   loader: 'postcss-loader',  //单独对postloader进行相关配置 或者新建一个postcss.config.js来配置
          //   options: {
          //     plugins: [
          //       require('autoprefixer')
          //     ]
          //   }
          // }, 
          'sass-loader']
      },
      {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "[name].[ext]",
                // outputPath: "images/",
                esModule: false
              },
            },
            ]
        }
    ]  
    },
  plugins: [
    // new CleanWebpackPlugin({
    //   cleanAfterEveryBuildPatterns: ["dist"], // 这个是非必填的
    //   }),
    new HtmlWebpackPlugin({
      title: "首页",
      template: './src/main.html'  //指定自定义写的html 模板路径
      // filename: "index.html",   //,生成预览页名称，默认为index.html 在内存里 不在目录
    }),
    
  ],
  devServer: {
    contentBase: './dist', // 告诉服务器从哪里提供内容
    port: 8000, // 端口号, 默认是8080
    open: true, 
    hot: true, // 启用 webpack 的模块热替换特性
    // hotOnly: true // 当编译失败之后不进行热更新
    historyApiFallback: true // 路由刷新跳转404
  },
}
