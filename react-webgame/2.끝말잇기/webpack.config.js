const path = require('path'); //node

module.exports = {
  name: 'wordchain-setting',
  mode: 'development', //실서비스는 production
  devtool: 'eval',
  resolve: {
    extensions: ['.js', '.jsx'] // 밑에 확장자까지 안써도 이렇게 해주면 알아서 client.js, jsx 파일을 확인함.
  },

  entry: {
    app: ['./client.jsx'], // 다른 파일이 불러온 파일은 안적어도됨.
  }, //입력

  module: {
    rules: [{
      test: /\.jsx?/,
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env', '@babel/preset-react'],
        plugins: ['@babel/plugin-proposal-class-properties'],
      },
    }],
  },

  output: {
    path: path.join(__dirname, 'dist'), // 경로를 알아서 합쳐줌
    filename: 'app.js'
  }, //출력
};