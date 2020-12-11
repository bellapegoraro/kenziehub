import {SET_USER} from './actionsTypes';
const userProfileReducer = (state={}, action) => {
    switch (action.type) {
        case SET_USER:
            const {userProfile} = action;
            console.log(userProfile)
            return state = userProfile;

        default:
            return state;
    }
}

export default userProfileReducer