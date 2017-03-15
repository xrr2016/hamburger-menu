import React from 'react'

function Dialog (props) {
  return (
    <div style={{border: props.border}}>
      <h1>{props.title}</h1>
      <p>{props.message}</p>
      <p>{props.children}</p>
    </div>
  )
}

export default class SignupDialog extends React.Component {
  constructor (props) {
    super(props)
    this.state = {name: ''}
    this.handleChange = this.handleChange.bind(this)
    this.handleSignup = this.handleSignup.bind(this)
  }
  handleChange (event) {
    this.setState({
      name: event.target.value
    })
  }
  handleSignup () {
    window.alert(`Welcome ${this.state.name}`)
  }
  render () {
    return (
      <Dialog border='2px solid blue' title='Learning React' message='React is Cool!'>
        <input onChange={this.handleChange} defaultValue='YO!' />
        <button onClick={this.handleSignup}>Sign Me Up!</button>
      </Dialog>
    )
  }
}
