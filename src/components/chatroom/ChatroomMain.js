import React from 'react';

const ChatroomMain = (props) => {

    return (
        <div className="chatroom__main">
            <h3>Room Name: {props.roomName}</h3>
        </div>
    );
};

export default ChatroomMain;