import React, { Component } from "react"
import "./App.css"

class App extends Component {
  render() {
    return (
      <div className="App">
        <button onClick={this.reqMessage}>1234</button>
      </div>
    )
  }
}

export default App