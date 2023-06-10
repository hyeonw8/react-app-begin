const path = require('path');
const webpack = require('webpack');

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
        plugins: ['@babel/plugin-proposal-class-properties'],
      }
    }]
  },
  plugins: [ // 추가적으로 하고 싶은 설정
    new webpack.LoaderOptionsPlugin({debug: true }),
  ], 
 
  output: {
    filename: 'app.js',
    path: path.join(__dirname, 'dist'),
  },
};