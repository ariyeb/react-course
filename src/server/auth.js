import Axios from 'axios';

export const subscribeToSite = async (email, password) => {
    try {
        const res = await Axios.post(process.env.REACT_APP_SUBSCRIBE, { email, password, returnSecureToken: true });
        console.log("subscribe func", res.data);
        return {
            token: res.data.idToken,
            user: { username: "ReactIsTheBest", id: res.data.localId }
        };
    } catch (err) {
        console.log(err);
    }
};