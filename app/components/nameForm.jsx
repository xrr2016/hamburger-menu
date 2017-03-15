import React from 'react'

export default class NameForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      text: '这是一段测试文本!',
      value: 'coconut'
    }
    this.handleChange = this.handleChange.bind(this)
    this.textChange = this.textChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange (event) {
    this.setState({
      name: event.target.value
    })
  }
  handleSubmit (event) {
    console.log(`
      You submited:
        name: ${this.state.name},
        text: ${this.state.text},
        value: ${this.state.value},
    `)
    event.preventDefault()
  }
  textChange (event) {
    this.setState({
      text: event.target.value
    })
  }
  selectChange (event) {
    this.setState({
      value: event.target.value
    })
  }
  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          用户名: {this.state.name}
        </label>
        <p>
          <input type='text' value={this.state.name} onChange={this.handleChange} />
        </p>
        <label>
          文本: {this.state.text}
        </label>
        <p>
          <input type='text' value={this.state.text} onChange={this.textChange} />
        </p>
        <label>
           Pick your favorite La Croix flavor:
           <select value={this.state.value} onChange={this.selectChange.bind(this)}>
             <option value='grapefruit'>Grapefruit</option>
             <option value='lime'>Lime</option>
             <option value='coconut'>Coconut</option>
             <option value='mango'>Mango</option>
           </select>
        </label>
        <p>
          <input type='submit' onSubmit={this.handleSubmit} value='提交' />
        </p>
      </form>
    )
  }
}
