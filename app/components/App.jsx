import React from 'react'

function formatName (user) {
  return user.firstName + ' ' + user.lastName
}
function greeting (user) {
  if (user) {
    return (<h1>Hello, {formatName(user)}!</h1>)
  } else {
    return (<h1>Hello, Stranger.</h1>)
  }
}

const user = {
  firstName: 'Bruce',
  lastName: 'Lee'
}
const testEle = React.createElement('p', {className: 'test'}, 'This is a test element')

function Welcome (props) {
  return (<h4>Welcome,{props.name}</h4>)
}
const welcome = <Welcome name='variable' />

class Hello extends React.Component {
  render () {
    return (<h4>Hello, {this.props.name}</h4>)
  }
}
export default class App extends React.Component {
  render () {
    return (
      <div style={{textAlign: 'center'}}>
        <h1>Hello React</h1>
        <p>Learning React</p>
        {welcome}
        {greeting(user)}
        {testEle}
        {Welcome({name: 'xrr2016'})}
        <Hello name='leo' />
      </div>
    )
  }
}
