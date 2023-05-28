import React, { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <ClassComp initNumber={2} />
      <FuncComp initNumber={2} />
    </div>
  );
}
let funcStyle = 'color:yellow';
let funId = 0;
function FuncComp(props) {
  let [ _number, setNumber ] = useState(props.initNumber);
  
  //   const dateState = useState((new Date()).toString());
  //   const _date = dateState[0];
  //   const setDate = dateState[1];  
  let [ _date, setDate ] = useState(new Date().toString());
  console.log('%cfunc => render' + (++funId), funcStyle);

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
