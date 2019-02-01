import React, { Component } from 'react';
import {connect} from 'react-redux';
import {filterUsersFunc} from "../action/usersAction"


class FiltersSection extends  Component{
    constructor(props){
        super(props);
        this.state = {
            activeButton: true,
            offlineButton: true,
            allVisionButton: false
        };
        this.filterUsers = this.filterUsers.bind(this);
    }

    filterUsers(showActiveUsers){
        this.props.filterUsersFunc(showActiveUsers, this.props.allUsers)
    }

    addVisionClass(stateButton){
        for(let keyState in this.state){
            if(stateButton === keyState){
                this.setState({[stateButton]: !this.state[stateButton]});
            }else{
                this.setState({[keyState]: true})
            }
        }
    }

    render(){
        const {activeButton, offlineButton, allVisionButton} = this.state;
        const {filterUsersFunc, allUsers} = this.props;
        return(
            <div className="filter-section">
                <button className={activeButton ? "" : "notVisible" }
                        onClick={() =>{this.filterUsers(true); this.addVisionClass('activeButton')}}>
                    Show active users</button>
                <button className={offlineButton ? "" : "notVisible" }
                        onClick={() =>{this.filterUsers(false); this.addVisionClass('offlineButton')}}>Show offline users</button>
                <button className={allVisionButton ? "" : "notVisible" }
                        onClick={() =>{ filterUsersFunc(null, allUsers); this.addVisionClass('allVisionButton')}}>Show all users</button>
            </div>
        )
    }
}

const mapStateToProps = state =>({
    renderedUsers: state.users.renderedUsers,
    allUsers: state.users.allUsers,
});

export default connect(mapStateToProps, {filterUsersFunc})(FiltersSection);