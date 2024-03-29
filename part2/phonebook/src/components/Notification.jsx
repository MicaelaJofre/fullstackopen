import React from 'react';

const Notification = ({ messageNotification }) => {
    
    if (messageNotification === null) return null
    
    return (
        <div className={messageNotification.status}>{messageNotification.message}</div>
    )
}

export { Notification }