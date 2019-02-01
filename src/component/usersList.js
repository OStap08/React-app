import React, { Component } from 'react';
import AddNewUser from "./addNewUser";
import User from "./user";
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { fetchUsers, deleteUserFunc, newUser} from "../action/usersAction"


class UserList extends Component{
    constructor(props){
        super(props);
    }

    componentWillMount(){
        this.props.fetchUsers();
    }

    deleteUser(deletedUserIndex){
        this.props.deleteUserFunc(deletedUserIndex, this.props.allUsers);
    }

    render(){
        return(
            <div id = "result">
                {this.props.renderedUsers.map((user,key) => <User index = {key} key={key} user = {user}  deleteUser = {(index) => this.deleteUser(index)}  />)}
                <AddNewUser/>
            </div>
        )
    }
}

UserList.propTypes = {
    fetchUsers: PropTypes.func.isRequired,
    deleteUserFunc: PropTypes.func.isRequired,
    renderedUsers: PropTypes.array,
};

const mapStateToProps = state => ({
    renderedUsers: state.users.renderedUsers,
    allUsers: state.users.allUsers,
});

export default connect(mapStateToProps, { fetchUsers, deleteUserFunc})(UserList);