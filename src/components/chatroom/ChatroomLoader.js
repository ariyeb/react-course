import React from 'react';
import ChatroomContextProvider from '../../context/ChatRoomContext';
import Chatroom from './Chatroom';

const ChatroomLoader = (props) => {
    const roomName = props.match.params.name;

    return (
        <ChatroomContextProvider>
            <Chatroom roomName={ roomName } />
        </ChatroomContextProvider>
    );
};

export default ChatroomLoader;