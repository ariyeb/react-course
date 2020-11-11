import React, { useState } from 'react';
import SearchUsers from './SearchUsers';

const ChatroomUsers = (props) => {
    const [usersToDisplay, setUsersToDisplay] = useState([...props.users]);

    const searchUsers = (searchValue) => {
        const users = [...props.users];
        setUsersToDisplay(searchValue === "" ?
            users :
            users.filter((user) => user.username.toLowerCase().includes(searchValue)));
    };

    return (
        <div className="chatroom__users">
            <h3>Users</h3>
            <SearchUsers searchUsers={searchUsers} />
            {usersToDisplay.map((user) => (
                <div className="user" key={user.id}>{user.username}</div>
            ))}
        </div>
    );
};

export default ChatroomUsers;
