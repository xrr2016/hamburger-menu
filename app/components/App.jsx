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

export default class App extends React.Component {
  render () {
    return (
      <div style={{textAlign: 'center'}}>
        <h1>Hello React</h1>
        <p>Learning React</p>
        {greeting(user)}
        {testEle}
      </div>
    )
  }
}
