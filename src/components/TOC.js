import React, { Component } from "react";

class TOC extends Component {
  render() {
    let lists = [];
    let data = this.props.data;
    let i = 0;
    while(i < data.length){
      lists.push(<li key={data[i].id}><a href={"/content/"+data[i].id}>{data[i].title}</a></li>);
      i = i + 1;
    }
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

export default TOC;