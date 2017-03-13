import React from 'react'

class FormatDate extends React.Component {
  render () {
    return (
      <div>
        <p>来自父组件的name属性 {this.props.name}</p>
        <p>来自父组件的nickName属性 {this.props.nickName}</p>
      </div>
    )
  }
}

export default class Clock extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      date: new Date().toLocaleTimeString(),
      name: 'Is a clock'
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
        <h1>Hello, React! {this.props.id}</h1>
        <h3>现在是{this.state.date}</h3>
        <FormatDate name={this.state.name} nickName={this.props.nickName} />
      </div>
    )
  }
}
