import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { MasterPage } from './components'

class App extends Component {
  render() {
    return (
      <Router>
        <MasterPage />
      </Router>
    )
  }
}

export default App
