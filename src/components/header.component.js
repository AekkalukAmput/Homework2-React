import React from 'react';

class Header extends React.Component {
  render(){
    return(
      <div>
          <h1>Test Header tag = {this.props.title}</h1>
          <h2>name : {this.props.name}</h2>

      </div>
    );
  }
}

export default Header;
