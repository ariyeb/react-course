import React from 'react';

const ChatroomUsers = (props) => {

    return (
        <div className="chatroom__users">
            <h3>Users</h3>
            {props.users.map((user) => (
                <div className="user" key={user.id}>{user.username}</div>
            ))}
        </div>
    );
};

export default ChatroomUsers;
