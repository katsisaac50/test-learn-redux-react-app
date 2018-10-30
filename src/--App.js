import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      title:'world'
    };
  }

  componentDidMount(){
    console.log('mounted');

  }

  clickHandler(title){
    this.setState({title});
  }

  render(){
    let {title} = this.state;
  
  return (
    <div>
    <h1> hello, {title}</h1>
    <button onClick = {()=>this.clickHandler('React')}>click me!</button>
    </div>
  );
}
}

export default App;
