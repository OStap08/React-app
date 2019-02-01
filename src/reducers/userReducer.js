import {FETCH_USERS, NEW_USER, DELETE_USER, FILTER_USER} from "../action/type"

const initialState = {
    renderedUsers: [],
    allUsers: []
};

export default function(state = initialState, action) {
    switch (action.type){
        case FETCH_USERS:
            return{
                ...state,
                renderedUsers: action.payload,
                allUsers: action.payload
            };
        case NEW_USER:
            return{
                ...state,
                renderedUsers: state.renderedUsers.concat([action.payload]),
                allUsers: state.allUsers.concat([action.payload])
            };
        case DELETE_USER:
            return{
                ...state,
                renderedUsers: action.payload,
                allUsers: action.payload
            };
        case FILTER_USER:
            return{
                ...state,
                renderedUsers: action.payload
            };
        default:
            return state;
    }
}