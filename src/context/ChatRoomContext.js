import React, { createContext, useReducer } from 'react';
import chatroomrducer, { initialchatroomState } from '../reducers/chatroomReducer';

export const ChatroomContext = createContext();

const ChatroomContextProvider = (props) => {
    const [chatroomState, chatroomDispatch] = useReducer(chatroomrducer, initialchatroomState);

    return (
        <ChatroomContext.Provider value={ { chatroomState, chatroomDispatch } }>
            { props.children }
        </ChatroomContext.Provider>
    );
};

export default ChatroomContextProvider;