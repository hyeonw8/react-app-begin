const React = require ('react');
const ReactDom = require ('react-dom');

const BullsAndCows = require('/BullsAndCows');

ReactDom.render(<BullsAndCows />, document.querySelector('#root'));
// <  />이런식으로 쓸거면 확장자명 jsx로~