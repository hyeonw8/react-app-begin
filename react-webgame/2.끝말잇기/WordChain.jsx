const React = require('react');
const {Component} = React;
// 필요로 하는 패키지나 라이브러리

class WordChain extends Component {
  state = {
    word: '현경',
    value: '',
    result: '',

  };

  onSubmitForm = (e) => {
    e.preventDefault();
    if (this.state.word[this.state.word.length - 1] === this.state.value[0]) {
      this.setState({
        result: '딩동댕',
        word: this.state.value,
        value: '',
      })
      this.input.focus();
    } else {
      this.setState({
        result: '땡',
        value: '',
      })
      this.input.focus();
    }
  }

  onChangeInput = (e) => {
    this.setState({value:e.target.value});
  }

  input;
  onRefInput = (c) => { //dom에 접근하는 포커스
    this.input = c;
  }

  render() {
    return (
    <>
      <div>{this.state.word}</div>
      <form onSubmit={this.onSubmitForm}>
        <input 
         ref={this.onRefInput} 
         value={this.state.value} 
         type="text" 
         onChange={this.onChangeInput} />
        <button>입력!</button>
      </form>
      <div>{this.state.result}</div>
    </>)
  }
}

module.exports = WordChain;
// 지금 파일에서 쓰는 컴포넌트를 다른데서도 쓸 수 있게 