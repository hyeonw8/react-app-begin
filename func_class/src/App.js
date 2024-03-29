import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [funcShow, setFuncShow] = useState(true);
  const [classShow, setClassShow] = useState(true);

  return (
    <div className="container">
      <h1>Hello World</h1>
      <input type="button" value="remove func" onClick={function(){
        setFuncShow(false);
      }}></input>
       <input type="button" value="remove class" onClick={function(){
        setClassShow(false);
      }}></input>
      {funcShow ? <FuncComp initNumber={2} /> : null }
      {classShow ? <ClassComp initNumber={2} /> : null}
    </div>
  );
}
let funcStyle = 'color:yellow';
let funId = 0;
function FuncComp(props) {
  let [ _number, setNumber ] = useState(props.initNumber);
  let [ _date, setDate ] = useState(new Date().toString());


  useEffect(function(){ // 처음 한 번만 실행되고 다시 실행되지 않게 
    console.log('%cfunc => useEffect (componentDidMount) ' + (++funId), funcStyle);
    document.title = _number
    return function(){ // clean up
      console.log('%cfunc => useEffect return (componentDidMount) ' + (++funId), funcStyle);
    }
  }, []); // 두번째 인자로 빈배열을 추가

  // useEffect => side effect가 생략된 말 
  useEffect(function(){
    console.log('%cfunc => useEffect _number (componentDidMount & componentDidUpdate) ' + (++funId), funcStyle);
    document.title = _number;
    return function(){ // clean up
      console.log('%cfunc => useEffect _number return (componentDidMount & componentDidUpdate) ' + (++funId), funcStyle);
    }
  }, [_number]); // 두 번째 인자로 number줘서 number가 바뀔때만 업데이트

  useEffect(function(){
    console.log('%cfunc => useEffect _date (coponentDidMount & componentDidUpdate) ' + (++funId), funcStyle);
    document.title =  _date;
    return function(){ // clean up
      console.log('%cfunc => useEffect _date return (coponentDidMount & componentDidUpdate) ' + (++funId), funcStyle);
    }
  }, [_date]);
  
  //   const dateState = useState((new Date()).toString());
  //   const _date = dateState[0];
  //   const setDate = dateState[1];  
  console.log('%cfunc => render ' + (++funId), funcStyle);
  return (
    <div className="container">
      <h2>function style component</h2>
      <p> Number: {_number}</p>
      <p> Date: {_date}</p>
      <input type="button" value="random" onClick={
        function() {
          setNumber(Math.random());
        }
      } />
      <input type="button" value="date" onClick={
        function() {
          setDate(new Date().toString());
        }
      } />
    </div>
  );
}

const classStyle = 'color:powderblue';

class ClassComp extends React.Component {
  state = {
    number: this.props.initNumber,
    date: (new Date().toString())
  }
  componentDidMount(){
    console.log('%cclass => componentDidMount', classStyle);
  }
  shouldComponentUpdate(nextProps, nextState){
    console.log('%cclass => shouldComponentUpdate', classStyle);
    return true;
  }
  componentDidUpdate(){
    console.log('%cclass => componentDidUpdate', classStyle);
  }
  componentWillUnmount(){
    console.log('%cclass => componentWillUnmount', classStyle);
  }
  render() {
    console.log('%cclass => render', classStyle);
    return (
      <div className="container">
        <h2>class style component</h2>
        <p>Number: {this.state.number}</p>
        <p>Date: {this.state.date}</p>
        <input type="button" value="random" onClick={
          function() {
            this.setState({number: Math.random()})
          }.bind(this)
        } />
        <input type="button" value="date" onClick={
          function() {
            this.setState({date: (new Date().toString())})
          }.bind(this)
        } />
      </div>
    );
  }
}

export default App;
