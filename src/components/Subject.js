import React, { Component } from "react";

class Subject extends Component {
  render() {
    return ( // 컴포넌트 만들때 반드시 하나의 최상위 태그로 시작해야
      <header>
        <h1><a href="/">{this.props.title}</a></h1>
        {this.props.sub}
      </header>
    );
  }
}

export default Subject;