import React, { Component } from 'react';
import createStore, { connect } from 'react-redux'

const counter = (state=0, action) => {
  switch (action.type){
    case 'INCREMENT':
    return state +1;
    case 'DECREMENT':
    return state -1;
    default:
    return state;
  }
}

const Counter = ({
  value,
  onIncreate,
  onDecrement
})=> (
  <div>
  <h1>{value}</h1>
  <button onClick={onIncrement}>+</button>
  <button onClick={onDecrement}>-</button>
  </div>
);

export const store = createStore(counter);

export default Counter;
