import React, { Component } from 'react';
import './style/App.css';
import ChatWindow from './ChatWindow';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h1>React-Demo</h1>
                </div>
                <div className="container">
                    <div className="row">
                        <ChatWindow />
                        <ChatWindow />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
