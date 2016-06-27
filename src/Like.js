import React from 'react';

class Like extends React.Component{
  constructor(props){
    super(props);
    this.state = {like: true};
    this.changeState = this.changeState.bind(this);
  }

  changeState(){
    console.log('this is:', this);
    this.setState({like: !this.state.like});
  }


  render(){
   if (this.state.like) {
     var source1 = 'http://emojipedia-us.s3.amazonaws.com/cache/f8/69/f869f6512b0d7187f4e475fc9aa7f250.png';
   }
   else {
     var source1 = 'http://emojipedia-us.s3.amazonaws.com/cache/2f/3c/2f3c03f9e546e4d9652560347210ba9d.png';
   }

    return (
      <div>
        <h3>Like</h3>
        <img src= {source1}/>
        <button onClick={this.changeState}>--</button>
      </div>
    );
  }
}

export default Like;
