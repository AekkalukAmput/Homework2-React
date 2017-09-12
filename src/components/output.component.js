import React from 'react';

class output extends React.Component{
  constructor(props){
    super(props)
    this.state={
    }
  }
  render(){

    const params = this.props.match.params;
    console.log(params);
    return(
      <div>
        <h1>ข้อมูลที่ถูกส่ง</h1>
        Value : {params.val}
      </div>
    );
  }
}
export default output;
