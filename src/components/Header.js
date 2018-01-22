import React, { Component } from 'react';

export class Header extends Component{
  render(){
    return(
      <div className="header_div">
        <h1>HighOnCoding</h1>
          <h2><a className="selected" href="#">Home</a></h2>
          <h2><a href="#">Categories</a></h2>
      </div>

    )
  }
}
