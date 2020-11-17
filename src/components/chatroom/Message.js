import React, { useContext } from 'react';
import { removeMessageAction } from '../../actions/chatroomActions';
import { ChatroomContext } from '../../context/ChatRoomContext';

const Message = ({ message, userId, index }) => {
    const isMyMessage = message.user.id === userId;
    const { chatroomDispatch } = useContext(ChatroomContext);

    const onClickDelete = () => {
        // deleteMessage(index);
        chatroomDispatch(removeMessageAction(index));
    };

    return (
        <div className={ isMyMessage ? "my-message" : "message" }>
            {isMyMessage && <div onClick={ onClickDelete } className="delete-message">x</div> }
            <div className="username">{ message.user.username }</div>
            <div className="content">{ message.message }</div>
        </div>
    );
};

export default Message;