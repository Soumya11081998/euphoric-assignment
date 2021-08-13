import React from 'react';
import './MyChat.css';


const MyChat = () => {
    return (
        <div className="myChat">
            <p className="myText">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <div className="meAndTime">
                <img className="myImage" src="https://scontent-del1-1.xx.fbcdn.net/v/t1.6435-9/127228009_1042019186298063_1853758436202537784_n.jpg?_nc_cat=111&ccb=1-4&_nc_sid=09cbfe&_nc_ohc=l74gPjw5hWcAX-K8bZK&tn=LMRixBQS5xVtfy4F&_nc_ht=scontent-del1-1.xx&oh=e6f02ce2682d03eff204750899c2518c&oe=613A90D0" alt="myImage" />
                <p className="time">time</p>
            </div>
        </div>
    )
}

export default MyChat
