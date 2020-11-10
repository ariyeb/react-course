import { nanoid } from 'nanoid';
import React, { useState } from 'react';
import ChatroomMain from './ChatroomMain';
import ChatroomUsers from './ChatroomUsers';

const Chatroom = () => {
    const roomName = "Bananas";
    const myUser = {
        username: "ReactIsTheBest",
        id: nanoid()
    };
    const users = [
        {
            username: "Moshe",
            id: nanoid()
        },
        {
            username: "Natan",
            id: nanoid()
        },
        {
            username: "Shir",
            id: nanoid()
        },
        {
            username: "Michal",
            id: nanoid()
        }
    ];
    const [messages, setMessages] = useState([
        {
            message: "Hi",
            id: nanoid(),
            user: users[1]
        },
        {
            message: "Hello",
            id: nanoid(),
            user: myUser
        }
    ]);

    return (
        <div className="chatroom">
            <ChatroomUsers users={users} />
            <ChatroomMain roomName={roomName} />
        </div>
    );
};

export default Chatroom;