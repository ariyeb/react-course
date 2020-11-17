import { nanoid } from 'nanoid';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Rooms = (props) => {
    const [rooms, setRooms] = useState([
        {
            name: "bananas",
            id: nanoid()
        },
        {
            name: "cats",
            id: nanoid()
        }
    ]);

    const onSubmitInputNewRoom = (event) => {
        event.preventDefault();
        const name = event.target.children[0].value.trim();
        if (name.length > 0) {
            props.history.push("/chatroom/" + name);
            setRooms(rooms.concat({
                name,
                id: nanoid()
            }));
        }

    };

    return (
        <div className="rooms">
            <div className="rooms__section">
                <h3>Choose room:</h3>
                {
                    rooms.map((room) => (
                        <div className="room" key={ room.id }>
                            <Link to={ "/chatroom/" + room.name }>{ room.name }</Link>
                        </div>
                    ))
                }
            </div>
            <div className="rooms__section">
                <h3>Create room:</h3>
                <form onSubmit={ onSubmitInputNewRoom }>
                    <input className="rooms__input-new" placeholder="new room" />
                    <button type="submit" className="rooms__button-new">Create</button>
                </form>
            </div>
        </div >
    );
};

export default Rooms;