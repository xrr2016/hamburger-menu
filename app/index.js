import React from 'react'
import ReactDom from 'react-dom'
import App from './components/App.jsx'
// import Clock from './components/clock.jsx'

// function tick () {
//   const element = (
//     <div style={{textAlign: 'center'}}>
//       <h3>It is {new Date().toLocaleTimeString()}</h3>
//     </div>
//   )
//   ReactDom.render(
//     element,
//     document.getElementById('tick')
//   )
// }
//
// window.setInterval(tick, 1000)

ReactDom.render(
  <div>
    <App />
    {/* <Clock id='001' /> */}
  </div>,
  document.getElementById('root')
)
