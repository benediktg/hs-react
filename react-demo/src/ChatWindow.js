import React, { Component } from 'react';
import InputSection from './InputSection';
import MessageList from './MessageList';

class ChatWindow extends Component {
    render() {
        return (
            <div className="col-sm">
                <div className="row">
                    <InputSection />
                </div>
                <div className="row">
                    <MessageList />
                </div>
            </div>
        );
    }
}


export default ChatWindow;
