const path = require('path');
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin'); 

module.exports = {
  //name: 'gugudan-setting',
  mode: 'development',
  devtool: 'eval', //개발 때는 eval, 배포시엔 hidden-source-map
  resolve: {
    extensions: ['.js', '.jsx']
  }, 

  entry: {
    app: ['./client'],
  },

  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      options: {
        presets: [
        ['@babel/preset-env', {
          targets: {
            browsers: ['> 1% in KR', ], //browserslist
          }
        }]
        , '@babel/preset-react'], //plugin들의 모음이 preset
        plugins: [
          '@babel/plugin-proposal-class-properties',
          'react-refresh/babel',
        ],
      }
    }]
  },
  plugins: [ // 추가적으로 하고 싶은 설정
    new RefreshWebpackPlugin(),
  ], 
 
  output: {
    filename: 'app.js',
    path: path.join(__dirname, 'dist'),
  },
  devServer: {
    devMiddleware: {publicPath: '/dist/'},
    static: {directory: path.resolve(__dirname)},
    hot: true,
    liveReload:false,
  }
};