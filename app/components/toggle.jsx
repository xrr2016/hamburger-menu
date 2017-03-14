import React from 'react'

export default class Toogle extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isToggleOn: true,
      Learning: false
    }
  }
  handleClick () {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }))
  }
  handleClick1 () {
    this.setState(prevState => ({
      Learning: !prevState.Learning
    }))
  }
  render () {
    return (
      <div>
        <h4>{this.state.isToggleOn ? 'ON' : 'OFF'}</h4>
        <h4>{this.state.Learning ? 'Learning' : 'Squander'}</h4>
        <button onClick={this.handleClick.bind(this)}>Click Me</button>
        <button onClick={this.handleClick1.bind(this)}>Learning?</button>
      </div>
    )
  }
}
