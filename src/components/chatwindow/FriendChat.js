import React from 'react';
import './FriendChat.css';

const FriendChat = () => {
    return (
        <div className="friendChat">
            <div className="friendAndTime">
                <img className="friendImage" src="https://images.lifealth.com/uploads/2018/03/commitments-to-make-if-you-want-to-be-happy.jpg" alt="friendImage" />
                <p className="time">time</p>
            </div>
            <p className="friendText">Hello Friend</p>
        </div>
    )
}

export default FriendChat
