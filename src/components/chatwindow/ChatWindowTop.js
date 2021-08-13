import React from 'react';
import StarIcon from '@material-ui/icons/Star';
import CallIcon from '@material-ui/icons/Call';
import VideocamIcon from '@material-ui/icons/Videocam';
import './ChatWindowTop.css';

const ChatWindowTop = () => {
    return (
        <div className="chatWindowTop">
            <p><strong>User</strong> is typing</p>
            <div className="icons">
                <StarIcon className="icon" />
                <CallIcon className="icon" />
                <VideocamIcon className="icon" />
            </div>
        </div>
    )
}

export default ChatWindowTop
