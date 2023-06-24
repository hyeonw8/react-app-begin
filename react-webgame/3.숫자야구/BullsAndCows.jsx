import React, { useState } from 'react';
import Try from "./Try";


function getNumbers() { // 숫자 4개를 랜덤하게 뽑는 함수,중복 없이
  const candidate = [1,2,3,4,5,6,7,8,9];
  const array = [];
  for(let i = 0; i < 4; i += 1){
    const chosen = candidate.splice(Math.floor(Math.random()* (9-i)), 1)[0];
    array.push(chosen);
  }
  return array;
}

const BullsAndCows = () => {
  const [result, setResult] = useState('');
  const [value, setValue] = useState('');
  const [answer, setAnswer] = useState(getNumbers); //lazy init
  const [tries, setTries] = useState([]);

  const onSubmitForm = (e) => {
    e.preventDefault();
    if(value === answer.join('')){
      setResult('홈런!!!');
      setTries((prevTries) => {
        return [...prevTries, { try: value, result: '홈런!!!' }]
      });
      alert('게임을 다시 시작합니다.');
      setValue('');
      setAnswer(getNumbers()); //lazy init 아님~ 여긴 호출해서 써야 함
      setTries([]);
    } else { // 답 틀렸으면
      const answerArray = value.split('').map((v) => parseInt(v));
      let strike = 0;
      let ball = 0;
      if (tries.length >= 9) { // 10번 이상 틀렸을 때
        setResult(`10번 넘게 틀려서 실패! 답은 ${answer.join(',')}이었습니다,,,`)
        alert('게임을 다시 시작합니다.');
        setValue('');
        setAnswer(getNumbers());
        setTries([]);
      }
      else {
        for (let i = 0; i < 4; i++){ // 스트라이크와 볼 판단 
          if(answerArray[i] === answer[i]){
            strike = strike + 1;
          } else if(answer.includes(answerArray[i])){
            ball = ball + 1;
          }
        }
        setTries((prevTries) =>  {
          return [...prevTries, { try: value, result: `${strike} 스트라이크, ${ball} 볼입니다.` }]
        });
        setValue('');
      }
  };

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

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
        {tries.map((v, i) => { // 컴포넌트를 따로 분리하게 되면서 v,i가 누군지 모르니깐 
          return (
            <Try key={`${i + 1}차 시도 :`} tryInfo={v}  /> //props로 달아줘야함, v안에 tries, result
          );
        })} 
      </ul>
    </>
  )
};
}

export default BullsAndCows;
// export default BullsAndCows; import BullsAndCows로 가져올 수 있고 (한번만 가능)
//export const hello = 'hello'; //import {hello} 로 가져올 수 있음 (변수명 다르다면 여러번 가능)

// const React = require('react);
// exprots.hello = 'hello';
// module.exports = BullsAndCows; => node에서는 이렇게, import from exprot default는 리액트