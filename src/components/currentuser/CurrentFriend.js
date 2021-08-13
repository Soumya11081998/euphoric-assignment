import React from 'react';
import './CurrentFriend.css';
import NotificationsIcon from '@material-ui/icons/Notifications';

const CurrentFriend = () => {
    return (
        <div className="currentFriend">
            <div className="currentFriendTop">
                <NotificationsIcon className="icon" />
                <p>Some Text</p>
            </div>
            <hr />
            <div className="currentFriendMid">
                <img className="messengerIcon" src="https://icon-library.com/images/android-messenger-icon/android-messenger-icon-4.jpg" alt="iconImage" />
                <img className="friendImage" src="https://images.lifealth.com/uploads/2018/03/commitments-to-make-if-you-want-to-be-happy.jpg" alt="friendImage" />
                <div className="dots">
                        <span class="dot"></span>
                        <span class="dot"></span>
                        <span class="dot"></span>
                </div>
            </div>
            <p><strong>Friend Name</strong></p>
            <p>Friend Address</p>
            <hr />
            <div className="currentFriendBot">
                <div className="item">
                    <p className="left"><strong>NickName:</strong></p>
                    <p className="right">Friend Nickname</p>
                </div>
                <hr />
                <div className="item">
                    <p className="left"><strong>Call:</strong></p>
                    <p className="right">Phone Number</p>
                </div>
                <hr />
                <div className="item">
                    <p className="left"><strong>Date Of Birth:</strong></p>
                    <p className="right">DD/MM/YYYY</p>
                </div>
                <hr />
                <div className="item">
                    <p className="left"><strong>Gender:</strong></p>
                    <p className="right">Friend Gender</p>
                </div>
                <hr />
                <div className="item">
                    <p className="left"><strong>Language:</strong></p>
                    <p className="right">Friend Language</p>
                </div>
            </div>
        </div>
    )
}

export default CurrentFriend
