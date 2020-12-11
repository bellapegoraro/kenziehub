import axios from 'axios';
import {setUser} from './actions';



const userProfileThunk = (userId) => (dispatch) =>{
    const token = window.localStorage.getItem('authToken');
    axios.get(`https://kenziehub.me/users/:${userId}`, {
        headers: token,
    })
    .then(res =>{
        dispatch(setUser(res.data.id))
    })
    .catch(err => console.log(err))
}

export default userProfileThunk
