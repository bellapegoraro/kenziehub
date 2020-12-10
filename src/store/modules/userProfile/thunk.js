import axios from 'axios';
import {setUser} from './actions';

const userProfileThunk = (user) => (dispatch) =>{
    axios.get(` https://kenziehub.me/users/${user}`)
    .then(res =>{
        dispatch(setUser(res))
        console.log(res)
    })
    .catch(err => console.log(err))
}

export default userProfileThunk
