const React = require('react');
const {Component} = React;
// 필요로 하는 패키지나 라이브러리

class WordChain extends Component {
  state = {
    text: 'hello, webpack',
  };

  render() {
    return <h1>{this.state.text}</h1>
  }
}

module.exports = WordChain;
// 지금 파일에서 쓰는 컴포넌트를 다른데서도 쓸 수 있게 