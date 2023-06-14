const React = require('react');
const Try = require('./Try');
const { useState, Component } = React;


function getNumbers() { // 숫자 4개를 랜덤하게 뽑는 함수,중복 없이

}

const BullsAndCows = () => {
  const [result, setResult] = useState('');
  const [value, setValue] = useState('');
  const [answer, setAnswer] = useState(getNumbers());
  const [tries, setTries] = useState([]);


  const onSubmitForm = () => {

  }

  const onChangeInput = () => {

  }

  const fruits = [
    { fruit: '사과', taste: '맛있다'},
    { fruit: '감', taste: '시다'},
    { fruit: '귤', taste: '달다'},
    { fruit: '밤', taste: '떫다'},
    { fruit: '배', taste: '맛있다'},
    { fruit: '무', taste: '맛없다'},
    { fruit: '사과', taste: '맛있다'},
  ];

    return (
      <>
        <h1>{result}</h1>
        <form onSubmit={onSubmitForm}>
          <input
            maxLength={4}
            value={value}
            onChange={onChangeInput} />
        </form>
        <div>시도: {tries.length}</div>
        <ul>
          {fruits.map((v, i) => { // 컴포넌트를 따로 분리하게 되면서 v,i가 누군지 모르니깐 
            return (
              <Try key={v.fruit + v.taste} value={v} index={i} /> //props로 달아줘야힘
            );
          })} 
        </ul>
      </>
    )
};


module.exports = BullsAndCows;
// export default BullsAndCows; import BullsAndCows로 가져올 수 있고 (한번만 가능)
//export const hello = 'hello'; //import {hello} 로 가져올 수 있음 (변수명 다르다면 여러번 가능)

// const React = require('react);
// exprots.hello = 'hello';
// module.exports = BullsAndCows; => node에서는 이렇게, import from exprot default는 리액트