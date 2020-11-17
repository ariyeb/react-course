import { nanoid } from "nanoid";

export const initialRoomsState = [
    {
        name: "bananas",
        id: nanoid()
    },
    {
        name: "cats",
        id: nanoid()
    }
];

const roomsReducer = (rooms, action) => {
    switch (action.type) {
        case "ADD_ROOM":
            return rooms.concat(action.room);
        case "SET_ROOMS":
            return [...action.rooms];
        default:
            return [...rooms];
    }
};

export default roomsReducer;