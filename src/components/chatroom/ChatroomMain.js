import React from 'react';
import AddMessage from './AddMessage';
import Message from './Message';

const ChatroomMain = (props) => {

    return (
        <div className="chatroom__main">
            <div>
                <h3>Room Name: {props.roomName}</h3>
                {props.messages.map((message) => (
                    <Message
                        key={message.id}
                        message={message}
                        userId={props.userId}
                    />
                ))}
            </div>
            <AddMessage addMessage={props.addMessage} />
        </div>
    );
};

export default ChatroomMain;