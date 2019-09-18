import React, { Component } from 'react';
import Cell from './Cell';

export default class Matrix extends Component {
  constructor(props){
    super(props)
    this.state = {
      counter: 0
    }
  }

  increment = () => {
    console.log(this); //arrow functions enable us to keep the current instance of the matrix as the execution context (e.g. when using this.increment)
    this.setState(prevState => {
      return {counter: prevState.counter +=1 }
    })
    console.log("INCREMENT");
  }

  genRow(vals){
    return vals.map(val => <Cell value={val} increment={this.increment}/>) // the arrow function above is necessary for this to still refer to the matrix
  }

  genMatrix(){
    return this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  }

  render() {
    return (
      <div id="matrix">
        <h1>Counter: {this.state.counter}</h1>
        {this.genMatrix()}
      </div>
    )
  }

}

Matrix.defaultProps={
  values: [
    ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
    ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
    ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
    ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
    ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
    ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
    ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
    ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
    ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
    ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00']
  ]
}
