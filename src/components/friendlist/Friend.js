import React from 'react';
import './Friend.css';

const Friend = ({image, Name, Chat, Time}) => {
    return (
        <div className="friend">
            <img className="friendImage" src={image} alt="FriendImage" />
            <div className="frienddata">
                <div className="frienddatatop">
                    <p className="name">{Name}</p>
                    <div className="dots">
                        <span class="dot"></span>
                        <span class="dot"></span>
                        <span class="dot"></span>
                    </div>
                </div>
                <div className="frienddatabottom">
                    <p>{Chat}</p>
                    <p>{Time}</p>
                </div>
            </div>
        </div>
    )
}

export default Friend
