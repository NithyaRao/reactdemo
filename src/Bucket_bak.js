import React from 'react';

class Bucket extends React.Component{
  constructor(props){
    super(props);
    this.state = {even: [], odd: []};
    this.update = this.update.bind(this);
  }

update(){
  const digit = this.refs.digit.value;
  if (digit%2 == 0) {
    var evennums = this.state.even.slice();
    evennums.push({digit});
    this.setState({even: evennums });
  }
  else {
    var oddnums = this.state.odd.slice();
    oddnums.push({digit});
    this.setState({odd: oddnums });
  }
  console.log('Update:', digit, this);
}


  render(){
    const esum = this.state.even.reduce((a,n) => a + n , 0);
    const osum = this.state.odd.reduce((a,n) => a + n , 0);
    return (
      <div>
        <h3>Bucket</h3>
        <input ref='digit' type='text' />
        <button onClick={this.update}>Add</button>
        <h5> Evens sum: {esum} </h5>
        <ul>
          {this.state.even.map((e,i) => <li key={i}>{e}</li>)}
        </ul>
        <h5> Odds sum: {osum} </h5>
        <ul>
          {this.state.odd.map((o,i) => <li key={i}>{o}</li>)}
        </ul>
      </div>
    );
  }
}

export default Bucket;
