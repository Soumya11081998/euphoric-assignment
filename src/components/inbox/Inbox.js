import React from 'react'
import DisplayInbox from './DisplayInbox'
import Sidebar from './Sidebar'
import './Inbox.css'

const Inbox = () => {
    return (
        <div className="inbox">
            <Sidebar />
            <DisplayInbox className="displayInbox" />
        </div>
    )
}

export default Inbox
