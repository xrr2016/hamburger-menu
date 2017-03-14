import React from 'react'

export default class List extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      numbers: [1, 2, 3, 4, 5]
    }
  }
  render () {
    return (
      <div>
        <ul>
          {this.state.numbers.map((number, index) => <li key={number.toString()}>{number * 2}</li>)}
        </ul>
      </div>
    )
  }
}
