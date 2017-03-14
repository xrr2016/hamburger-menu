import React from 'react'

function good () {
  return <p>IS GOOD!</p>
}

function bad () {
  return <p>IS BAD!</p>
}

export default class Candition extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      good: false
    }
  }
  handleClick () {
    this.setState(prevState => ({
      good: !prevState.good
    }))
  }
  result () {
    if (this.state.good) {
      return good()
    }
    return bad()
  }
  render () {
    return (
      <div>
        {this.result()}
        <p>Display rely on prop 'show' {this.props.show ? 'SHOW' : 'HIDE'}</p>
        <button onClick={this.handleClick.bind(this)}>Toggle</button>
        {this.props.messages.length > 0 ? <h2>You have {this.props.messages.length} unread messages!</h2> : ''}
        {/* {this.props.messages.length > 0 && <h2>You have {this.props.messages.length} unread messages!</h2>} */}
        {this.props.eatting ? 'eatting' : 'not' }
      </div>
    )
  }
}
