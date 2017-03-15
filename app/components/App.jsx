import React from 'react'
// import Clock from './clock.jsx'
// import Toggle from './toggle.jsx'
// import Condition from './condition.jsx'
// import List from './list.jsx'
// import Form from './nameForm.jsx'
// import Boiling from './boiling.jsx'
import SignupDialog from './composition.jsx'

// function formatName (user) {
//   return user.firstName + ' ' + user.lastName
// }
// function greeting (user) {
//   if (user) {
//     return (<h1>Hello, {formatName(user)}!</h1>)
//   } else {
//     return (<h1>Hello, Stranger.</h1>)
//   }
// }

// const user = {
//   firstName: 'Bruce',
//   lastName: 'Lee'
// // }
// const testEle = React.createElement('p', {className: 'test'}, 'This is a test element')

// function Welcome (props) {
//   return (<h4>Welcome,{props.name}</h4>)
// }
// const welcome = <Welcome name='variable' />
//
// class Hello extends React.Component {
//   render () {
//     return (<h4>Hello, {this.props.name}</h4>)
//   }
// // }
// class Comment extends React.Component {
//   render () {
//     return (
//       <div className='comment'>
//         <div className='comment-text'>{this.props.text}</div>
//         <div className='comment-date'>{this.props.date}</div>
//       </div>
//     )
//   }
// }
// const messages = ['React', 'React-router', 'Redux', 'Mobx', 'Antd']

export default class App extends React.Component {
  render () {
    return (
      <div style={{textAlign: 'center'}}>
        {/* <Clock nickName='tom' id='001' /> */}
        {/* <Toggle /> */}
        {/* <Condition show messages={messages} eatting /> */}
        {/* <List /> */}
        {/* <Form /> */}
        {/* <Boiling /> */}
        <SignupDialog />
      </div>
    )
  }
}
