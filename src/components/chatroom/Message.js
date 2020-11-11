import React from 'react';

const Message = ({ message, userId }) => {
    const isMyMessage = message.user.id === userId;
    return (
        <div className={isMyMessage ? "my-message" : "message"}>
            <div className="username">{message.user.username}</div>
            <div className="content">{message.message}</div>
        </div>
    );
};

export default Message;