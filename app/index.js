import React from 'react'
import ReactDom from 'react-dom'
// import App from './components/App.jsx'

function formatName (user) {
  return user.firstName + '' + user.lastName
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

const Ele = (<section>{greeting(user)}</section>)

ReactDom.render(
  Ele,
  document.getElementById('root')
)
