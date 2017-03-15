import React from 'react'

function toCelsius (fahrenheit) {
  return (fahrenheit - 32) * 5 / 9
}

function toFahrenheit (celsius) {
  return (celsius * 9 / 5) + 32
}

function tryConvert (temperature, convert) {
  const input = parseFloat(temperature)
  if (Number.isNaN(input)) {
    return ''
  }
  const output = convert(input)
  return output.toFixed(3)
}

class TemInput extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      scaleNames: {
        c: 'Celsius',
        f: 'Fahrenheit'
      }
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange (e) {
    this.props.onTemperatureChange(e.target.value)
  }
  render () {
    const temperature = this.props.temperature
    const scale = this.props.scale
    return (
      <fieldset>
        <legend>输入{this.state.scaleNames[scale]}温度: </legend>
        <input type='number' value={temperature} onChange={this.handleChange} />
      </fieldset>
    )
  }
}

export default class Boiling extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      temperature: '',
      scale: 'c'
    }
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this)
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this)
  }
  handleCelsiusChange (temperature) {
    this.setState({
      temperature: temperature,
      scale: 'c'
    })
  }
  handleFahrenheitChange (temperature) {
    this.setState({
      temperature: temperature,
      scale: 'f'
    })
  }
  render () {
    const scale = this.state.scale
    const temperature = this.state.temperature
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature
    return (
      <div>
        <TemInput scale='c' temperature={celsius} onTemperatureChange={this.handleCelsiusChange} />
        <TemInput scale='f' temperature={fahrenheit} onTemperatureChange={this.handleFahrenheitChange} />
        <p>celsius: {celsius} <br /> fahrenheit: {fahrenheit} <br />{fahrenheit >= 100 ? '水开了!' : '水没开.'}</p>
      </div>
    )
  }
}
