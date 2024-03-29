import React, { Component } from "react";

class TOC extends Component {
  shouldComponentUpdate(newProps, newState){ // 성능에 문제가 있을 때 사용하면 좋음~ 꼭 해야하는 건 아님.
    console.log('===>TOC render shouldComponentUpdate'
      ,newProps.data
      ,this.props.data
    );
    if(this.props.data === newProps.data){
      return false;
    }
    return true;
  }
  render() {
    console.log('TOC render')
    let lists = [];
    let data = this.props.data;
    let i = 0;
    while (i < data.length) {
      lists.push(
        <li key={data[i].id}>
          <a 
            href={"/content/" + data[i].id}
            data-id={data[i].id}
            onClick={function(e){
              e.preventDefault();
              this.props.onChangePage(e.target.dataset.id);
            }.bind(this)}
          >
            {data[i].title}
          </a>
        </li>);
      i = i + 1;
    }
    return (
      <nav>
        <ul>
          {lists}
        </ul>
      </nav>
    );
  }
}

export default TOC;