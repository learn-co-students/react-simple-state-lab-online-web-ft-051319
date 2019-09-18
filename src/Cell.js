import React, { Component } from 'react';

export default class Cell extends Component {
  constructor(props){
    super(props) //when running super(props) we're assigning this.props=props
    this.state={
      color: this.props.value
    }
  }

  render (){
    return (
      <div
      className='cell'
      style={{backgroundColor: this.state.color}}
      onClick={this.handleClick}
      >

      </div>
    )
  }

  handleClick = () => {
    this.props.increment() //the arrow functino for increment is important especially when we're passing functions around from one class to another (i.e. from Matrix to Cell)
    this.setState({
      color: '#333'
    })
  }
}
