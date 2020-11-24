// import { nanoid } from 'nanoid';
import React, { useEffect, useReducer, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { setRoomsAction } from '../../actions/roomsActions';
import roomsReducer from '../../reducers/roomsReducer';
import { getRoomsFromDB, postRoomInDB } from '../../server/db';
import Loader from '../main/Loader';
// import Axios from 'axios';

const Rooms = (props) => {
    // const [rooms, setRooms] = useState([
    //     {
    //         name: "bananas",
    //         id: nanoid()
    //     },
    //     {
    //         name: "cats",
    //         id: nanoid()
    //     }
    // ]);
    const [rooms, dispatcRooms] = useReducer(roomsReducer, []);
    const [isRoomLoaded, setIsRoomLoaded] = useState(false);
    const history = useHistory();

    // useEffect(() => {
    //     (async () => {
    //         try {
    //             for (let room of rooms) {
    //                 const res = await Axios.post(process.env.REACT_APP_DB + "rooms.json", room);
    //                 console.log(res.data);
    //             }
    //         } catch (e) {
    //             console.log(e);
    //         }
    //     })();

    // }, [rooms]);

    useEffect(() => {
        getRoomsFromDB().then((rooms) => {
            dispatcRooms(setRoomsAction(rooms));
            setIsRoomLoaded(true);
        });
    }, []);

    const onSubmitInputNewRoom = (event) => {
        event.preventDefault();
        const name = event.target.children[0].value.trim();
        if (name.length > 0) {
            // props.history.push("/chatroom/" + name);
            // setRooms(rooms.concat({
            //     name,
            //     id: nanoid()
            // }));
            // dispatcRooms(addRoomAction({
            //     name,
            //     id: nanoid()
            // }));

            postRoomInDB(name).then((roomId) => {
                history.push("/chatroom/" + roomId);
            });
        }

    };

    return (
        <div className="rooms">
            <div className="rooms__section">
                <h3>Choose room:</h3>
                {
                    rooms.map((room) => (
                        <div className="room" key={ room.id }>
                            <Link to={ "/chatroom/" + room.id }>{ room.name }</Link>
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
                <Link to="/login">Login example link</Link>
            </div>
            {!isRoomLoaded && <Loader /> }
        </div >
    );
};

export default Rooms;


// צרו פונקציה ששואבת פרטים של חדר ספציפי,
// מקמו את הפונקציה במקום הנכון באתר ודאגו לכך שתאכלס את הצ'אט רום במה שצריך.
// אם מנסים להיכנס לחדר שאינו קיים אז מופנים אל 404