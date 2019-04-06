import React from 'react'
import './App.css'
import { Component } from './Component'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Component />
        </header>
      </div>
    )
  }
}

export default App
