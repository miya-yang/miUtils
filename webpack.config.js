const path = require('path')
module.exports = {
  // 入口文件
  entry: path.resolve(__dirname, 'src/miUtils.js'),
  output: {
    // 输出路径
    path: path.resolve(__dirname, 'dist'),
    // 输出文件名
    filename: 'miUtils.js'
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              'env'
            ]
          }
        },
        exclude: path.resolve(__dirname, 'node_modules'),
        include: path.resolve(__dirname, 'src')
      }
    ]
  },
  // 控制打包后的文件，可填写 development/production
  mode: 'development'
}
