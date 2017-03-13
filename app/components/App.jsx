import React from 'react'

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

function Welcome (props) {
  return (<h4>Welcome,{props.name}</h4>)
}
// const welcome = <Welcome name='variable' />
//
// class Hello extends React.Component {
//   render () {
//     return (<h4>Hello, {this.props.name}</h4>)
//   }
// }
class Comment extends React.Component {
  render () {
    return (
      <div className='comment'>
        <div className='comment-text'>{this.props.text}</div>
        <div className='comment-date'>{this.props.date}</div>
      </div>
    )
  }
}

export default class App extends React.Component {
  render () {
    return (
      <div style={{textAlign: 'center'}}>
        {/* <Hello name='React' /> */}
        <Welcome name='Jack' />
        <Comment text='评论内容' date='2017.03.13' />
      </div>
    )
  }
}
