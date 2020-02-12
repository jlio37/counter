import React, {Component} from 'react';

class Counter extends Component{
constructor(){
  super();
  this.state= {
    count: 0,
  }
}

// this where we go methods
Increment = () =>{
  this.setState({
    count: this.state.count + 1,
  })
}

Decrement = () =>{
  this.setState({
    count: this.state.count - 1,
  })
}

//if this.state.Counter < 1(

//)
  render(){
    return(
      <div className="container">
      <div className="navbar">Counter</div>
      <div className="counter">
       <h1>{this.state.count}</h1>
       <button type="button" onClick={this.Increment}>Increment</button>
       <button type="button" onClick={this.Decrement}>Decrement</button>
       </div>
      </div>
    )
  }
}

export default Counter;
