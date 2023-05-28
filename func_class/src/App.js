import React, { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <ClassComp initNumber={10} />
      <FuncComp initNumber={20} />
    </div>
  );
}

class ClassComp extends React.Component {
  state = {
    number: this.props.initNumber,
    date: (new Date().toString())
  }
  render() {
    return (
      <div className="container">
        <h2>class style component</h2>
        <p>Class Component Number: {this.state.number}</p>
        <p>Class Component Date: {this.state.date}</p>
        <input type="button" value="random1" onClick={
          function() {
            this.setState({number: Math.random()})
          }.bind(this)
        } />
        <input type="button" value="random2" onClick={
          function() {
            this.setState({date: (new Date().toString())})
          }.bind(this)
        } />
      </div>
    );
  }
}

function FuncComp(props) {
  let [ _number, setNumber ] = useState(props.initNumber);
  let [ _date, setDate ] = useState(new Date().toString());
  return (
    <div className="container">
      <h2>function style component</h2>
      <p>Functional Component Number: {_number}</p>
      <p>Functional Component Date: {_date}</p>
      <input type="button" value="random1" onClick={
        function() {
          setNumber(Math.random());
        }
      } />
      <input type="button" value="random2" onClick={
        function() {
          setDate(new Date().toString());
        }
      } />
    </div>
  );
}

export default App;
