import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header.component';
import Footer from './components/footer.component';
import Calculator from './components/calculator.component';

class App extends Component {
  constructor(){
    super();
    this.state = {name :"Ruj", age : 20 };
  }
  onClick(){
    this.setState({name: "Mr.Rose"});
  }
  setAge(e){
    const age = e.target.value;
    this.setState({age : age});
  }
  render() {
    const list = [
      <Header />,
      <Header />
    ];
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <Header title = "Test props" name = "God" />
          <Header title = {this.state.name} />
        </div>
        <div>
          <div>My Nickname is {this.state.name}</div>
          <div> I am {this.state.age} years old</div>
          <button onClick={this.onClick.bind(this)}>Click me please</button>
          <input onChange = {this.setAge.bind(this)} />
          <Footer />
          <div>
            <Calculator />
          </div>
        </div>
      </div>

    );
  }
}

export default App;
