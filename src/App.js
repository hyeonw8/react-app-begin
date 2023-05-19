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
  constructor(props){
    super(props);
    this.state = {
      subject:{title:'WEB', sub:'World Wide Web!'},
      contents:[
        {id:1, title:'WEB', desc:'HTMl is for information'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive'}
      ]
    }
  }
  render() { // render 메소드
    return (
      <div className='App'>
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}></Subject>
        <TOC data={this.state.contents}></TOC>
        <Content title="HTML" desc="HTML is Hype rText Markup Language."></Content>
      </div>
    )
  }
}

export default App;
