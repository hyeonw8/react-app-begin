import { Component } from 'react';
import './App.css';

// function App() { function type
//   return (
//     <div className="App">
//       Hello, React!!
//     </div>
//   );
// }

class Subject extends Component {
  render() {
    return ( // 컴포넌트 만들때 반드시 하나의 최상위 태그로 시작해야
      <header>
        <h1>{this.props.title}</h1>
        {this.props.sub}
      </header>
    );
  }
}

class TOC extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li><a href="1.html" /></li>
          <li><a href="2.html" /></li>
          <li><a href="3.html" /></li>
        </ul>
      </nav>
    );
  }
}

class Content extends Component {
  render() {
    return (
      <article>
        <h2>{this.props.title}</h2>
        {this.props.desc}
      </article>
    );
  }
}

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
