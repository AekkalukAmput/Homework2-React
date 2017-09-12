import React from 'react';

class Calculator extends React.Component {
    constructor(){
      super();
      this.state = {num1 : "" , num2 : ""};
    }
    setNum1(e){
      const num1 = e.target.value;
      this.setState({num1 : num1});
    }
    setNum2(e){
      const num2 = e.target.value;
      this.setState({num2 : num2});
    }
    render(){
      console.log(this.state.num1);
      return(
        <div>
            <h2>Text 1 : {this.state.num1}</h2>
            <h2>Text 2 : {this.state.num2}</h2>
            <h1>Calculator = {this.state.num1+this.state.num2}</h1>
            Text 1 :<input onChange = {this.setNum1.bind(this)} />
            Text 2 :<input onChange = {this.setNum2.bind(this)} />
        </div>
      );
    }
  }

export default Calculator;
