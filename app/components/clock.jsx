import React from 'react'

export default class Clock extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      date: new Date().toLocaleTimeString()
    }
  }
  componentDidMount () {
    console.log('Clock Mounted.')
    this.timerID = setInterval(() => this.tick(), 1000)
  }
  componentWillUnnount () {
    console.log('Clock Unmounted.')
    clearInterval(this.timerID)
  }
  tick () {
    this.setState({
      date: new Date().toLocaleTimeString()
    })
  }
  render () {
    return (
      <div style={{textAlign: 'center'}}>
        <h1>Hello, React!</h1>
        <h3>现在是{this.state.date}</h3>
      </div>
    )
  }
}
