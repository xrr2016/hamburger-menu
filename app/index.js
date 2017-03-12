import React from 'react'
import ReactDom from 'react-dom'
import App from './components/App.jsx'

function tick () {
  const element = (
    <div style={{textAlign: 'center'}}>
      <h3>It is {new Date().toLocaleTimeString()}</h3>
    </div>
  )
  ReactDom.render(
    element,
    document.getElementById('tick')
  )
}

window.setInterval(tick, 1000)

ReactDom.render(
  <App />,
  document.getElementById('root')
)
