import React from 'react';
import './ChatWindow.css';
import ChatWindowMid from './ChatWindowMid';
import ChatWindowTop from './ChatWindowTop';

const ChatWindow = () => {
    return (
        <div className="chatWindow">
            <ChatWindowTop />
            <ChatWindowMid />
        </div>
    )
}

export default ChatWindow
