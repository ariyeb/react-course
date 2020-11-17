import { nanoid } from 'nanoid';
import React, { useContext } from 'react';
import { addMessageAction } from '../../actions/chatroomActions';
import { ChatroomContext } from '../../context/ChatRoomContext';

const AddMessage = (props) => {
    const { chatroomDispatch } = useContext(ChatroomContext);

    const onSubmit = (event) => {
        event.preventDefault();
        const message = event.target.children[0].children[0].value.trim();
        if (message.length > 0) {
            // props.addMessage(message);
            chatroomDispatch(addMessageAction({
                message,
                id: nanoid(),
                user: {
                    username: "ReactIsTheBest",
                    id: "11"
                }
            }));
        }
        event.target.children[0].children[0].value = "";
    };
    return (
        <form onSubmit={ onSubmit }>
            <div className="message-input">
                <input />
                <button type="submit">Send</button>
            </div>
        </form>
    );
};

export default AddMessage;