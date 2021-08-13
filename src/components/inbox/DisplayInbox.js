import React from 'react';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import './DisplayInbox.css'
import FriendList from '../friendlist/FriendList';

const DisplayInbox = () => {
    return (
        <>
            <div className="displayInbox">
                <div className="inboxItem">
                    <p>Inbox</p>
                    <PersonAddIcon className="addPerson" />
                </div>
                <br />
                <div className="inboxItem">
                    <p>All Messages</p>
                    <p>Number</p>
                </div>
                <div className="inboxItem">
                    <p>Unread</p>
                    <p>Number</p>
                </div>
                <div className="inboxItem">
                    <p>Important</p>
                    <p>Number</p>
                </div>
                <div className="inboxItem">
                    <p>Drafts</p>
                    <p>Number</p>
                </div>
                <hr />
                <div className="inboxItem">
                    <p>Teams</p>
                    <p>Number</p>
                </div>            <div className="inboxItem">
                    <p>Groups</p>
                    <p>Number</p>
                </div>            <div className="inboxItem">
                    <p>Channels</p>
                    <p>Number</p>
                </div>
                <div className="inboxItem">
                    <p>Location</p>
                </div>
                <div className="inboxItem">
                    <p>Mode</p>
                    <p>Number</p>
                </div>
                <hr />
                <div className="inboxItem">
                    <p>Help</p>
                </div>
                <div className="inboxItem">
                    <p>Settings</p>
                </div>
            </div>
            <FriendList className="friendList" />
        </>
    )
}

export default DisplayInbox;
