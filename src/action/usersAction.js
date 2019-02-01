import {FETCH_USERS, NEW_USER, DELETE_USER, FILTER_USER} from "../action/type"

export const fetchUsers = () => dispatch =>{
    fetch('http://www.json-generator.com/api/json/get/cpTmnSrPCa?indent=2')
        .then(response => response.json())
        .then(users =>{
            dispatch({
                type: FETCH_USERS,
                payload: users
            })
        });
};

export const newUserFunc = (userIsValid, newUser) => dispatch =>{
    if(userIsValid){
        dispatch({
            type: NEW_USER,
            payload: newUser
        })
    }
};

export const deleteUserFunc = (deletedUserIndex, allUsers) => dispatch =>{
    let newUsersArray = [];
    allUsers.forEach((user, i)=>{
        if(i !== deletedUserIndex){
            newUsersArray.push(user);
        }
    });
    dispatch({
        type: DELETE_USER,
        payload: newUsersArray
    })
};

export const filterUsersFunc = (showActiveUsers, allUsers) => dispatch =>{

    let filteredUsers = [];
    allUsers.map((user) =>{
        if(user.isActive === showActiveUsers){
            filteredUsers.push(user);
            dispatch({
                type: FILTER_USER,
                payload: filteredUsers
            });
        }else if (showActiveUsers === null){
            dispatch({
                type: FILTER_USER,
                payload: allUsers
            });
        }
    });

};