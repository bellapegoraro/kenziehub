import axios from 'axios';
import {setUser} from './actions';

const userProfileThunk = (userProfile) => (dispatch) =>{
    const token = window.localStorage.getItem('authToken');
    axios.get(`https://kenziehub.me/users/1521c31e-9f2e-4598-ae82-835cd55882d3`, {
        headers: token,
    })
    .then(res =>{
        dispatch(setUser(res))
    })
    .catch(err => console.log(err))
}

export default userProfileThunk
