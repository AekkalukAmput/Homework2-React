import React from 'react';
import { NavLink } from 'react-router-dom';

class input extends React.Component {
  constructor() {
    super();
    this.state = {data: "" };
  }
  setVal(e){
    const val = e.target.value;
    this.setState({data : val})
  }
  render(){
    console.log(this.state.data);
    return(
        <div>
          <h1>ส่งข้อมูล</h1>
          <input type="text" name="title" onChange={this.setVal.bind(this)} />
          <NavLink to={{pathname:"/output/"+this.state.data}} activeClassName="active" ><button>send</button></NavLink>
        </div>

    );
  }
}
export default input;
