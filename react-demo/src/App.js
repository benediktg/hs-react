import React, { Component } from "react";
import "./style/App.css";
import ChatWindow from "./ChatWindow";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
    };
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>React-Demo</h1>
        </div>
        <div className="container">
          <div className="row">
            <ChatWindow messages={this.state.messages} />
            <ChatWindow messages={this.state.messages} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
