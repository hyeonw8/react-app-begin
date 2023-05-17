import { Component } from 'react';
import TOC from './components/TOC';
import Content from './components/Content';
import Subject from './components/Subject';
import './App.css';

// function App() { function type
//   return (
//     <div className="App">
//       Hello, React!!
//     </div>
//   );
// }

class App extends Component { // class type
  render() { // render 메소드
    return (
      <div className='App'>
        <Subject title="WEB" sub="world wide web!"></Subject>
        <TOC></TOC>
        <Content title="HTML" desc="HTML is HyperText Markup Language."></Content>
      </div>
    )
  }
}

export default App;
