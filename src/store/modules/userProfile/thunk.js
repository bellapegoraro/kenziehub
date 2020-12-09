import axios from 'axios';
import {setUser} from './actions';
import userProfileReducer from './reducer';

const userProfileThunk = (id) => (dispatch) =>{
    axios.get(` https://kenziehub.me/users/${id}`)
    .then(res =>{
        dispatch(setUser(res))
    .catch(err => console.log(err));
    })
}

export default userProfileThunk