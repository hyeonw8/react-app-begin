import React, { Component } from "react";

class Control extends Component {
  render() {
    return ( // 컴포넌트 만들때 반드시 하나의 최상위 태그로 시작해야
      <ul>
        <li><a href='/create' onClick={function(e){
          e.preventDefault();
          this.props.onChangeMode('create');
        }.bind(this)}>create</a></li>
        <li><a href='/update' onClick={function(e){
          e.preventDefault();
          this.props.onChangeMode('update');
        }.bind(this)}>update</a></li>
        <li><input type='button' value="delete" onClick={function(e){
          e.preventDefault();
          this.props.onChangeMode('delete');
        }.bind(this)}> </input></li>
      </ul>
    );
  }
}

export default Control;