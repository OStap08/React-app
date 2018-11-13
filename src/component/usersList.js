import React, { Component } from 'react';
import AddNewUser from "./addNewUser";
import User from "./user";

class UserList extends Component{
    constructor(props){
        super(props);
        this.deleteUser = this.deleteUser.bind(this);
    }

    deleteUser(deletedUserIndex){
        let newUsersArray = [];
        this.props.allUsers.forEach((user, i)=>{
            if(i !== deletedUserIndex){
                newUsersArray.push(user)
            }
        });
        this.props.updateUsersList(newUsersArray, newUsersArray);
    }

    render(){
        return(
            <div id = "result">
                {this.props.renderedUsers.map((user,key) => <User index = {key} user = {user}  deleteUser = {this.deleteUser}  />)}
                <AddNewUser updateUsersList = {this.props.updateUsersList} allUsers = {this.props.allUsers}/>
            </div>
        )
    }
}

export default UserList;