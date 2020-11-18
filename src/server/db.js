import Axios from 'axios';

const DB_URL = process.env.REACT_APP_DB;

export const getRoomsFromDB = async () => {
    try {
        const res = await Axios.get(DB_URL + "rooms.json");
        const rooms = [];
        for (let id in res.data) {
            rooms.push({
                id,
                name: res.data[id].name
            });
        }

        return rooms;
    } catch (err) {
        console.log(err);
    }
};

export const postRoomInDB = async (name) => {
    try {
        const res = await Axios.post(DB_URL + "rooms.json", { name, users: [] });
        return res.data.name;
    } catch (err) {
        console.log(err);
    }
};