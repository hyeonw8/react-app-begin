const React = require('react');
const { Component, useState, useRef } = React;
// 필요로 하는 패키지나 라이브러리

// class WordChain extends Component {
//   state = {
//     word: '현경',
//     value: '',
//     result: '',

//   };

const WordChain = () => {
  const [word, setWord] = useState('현경');
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const inputRef = useRef(null);


  const onSubmitForm = (e) => { //class에서 hooks로 바꾸면 얘네도 더이상 클래스 매소드가 아니기때문에 따로 바꿔줘야함
    e.preventDefault();
    if (word[word.length - 1] === value[0]) {
      // this.setState({
      //   result: '딩동댕',
      //   word: this.state.value,
      //   value: '',
      // })
      setResult('딩동댕');
      setWord(value);
      setValue('');
      // this.input.focus();
      inputRef.current.focus(); // hooks에서는 ref에 current 꼭 붙여야
    } else {
      // this.setState({
      //   result: '땡',
      //   value: '',
      // })
      // this.input.focus();
      setResult('땡');
      setValue('');
      inputRef.current.focus();
    }
  }

  const onChangeInput = (e) => {
    // this.setState({value:e.target.value});
    setValue(e.target.value);
  }

  // input;
  // onRefInput = (c) => { //dom에 접근하는 포커스
  //   this.input = c;
  // }

  // render() { // class에서 hooks로 바꾸면 render 필요없음
    return (   // class에서 hooks로 바꾸면 this를 안쓰니까! this.state.word => word로
    <>  
      <div>{word}</div>    
      <form onSubmit={onSubmitForm}>
        <input 
         ref={inputRef} 
         value={value} 
         type="text" 
         onChange={onChangeInput} />
        <button>입력!</button>
      </form>
      <div>{result}</div>
    </>);
//   }
  };

module.exports = WordChain;
// 지금 파일에서 쓰는 컴포넌트를 다른데서도 쓸 수 있게 