import {setUser} from './action';
import api from '../../../services/api';

export const userProfileThunk = (id) => (dispatch) =>{
        api.get(`users/${id}`)
        .then(res => dispatch(setUser(res.data)))
        .catch(err => console.log(err))
}