import React, { Component } from 'react';

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
        const {allUsers,updateUsersList} = this.props;

        let filteredUsers = [];
        allUsers.map((user, key) =>{
            if(user.isActive === showActiveUsers){
                filteredUsers.push(user);
            }
        });
       updateUsersList(filteredUsers, allUsers);
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
        let users = this.props.allUsers;
        const {activeButton} = this.state;
        return(
            <div className="filter-section">
                <button className={this.state.activeButton ? "" : "notVisible" }
                        onClick={() =>{this.filterUsers(true); this.addVisionClass('activeButton')}}>
                    Show active users</button>
                <button className={this.state.offlineButton ? "" : "notVisible" }
                        onClick={() =>{this.filterUsers(false); this.addVisionClass('offlineButton')}}>Show offline users</button>
                <button className={this.state.allVisionButton ? "" : "notVisible" }
                        onClick={() =>{this.props.updateUsersList(users, users); this.addVisionClass('allVisionButton')}}>Show all users</button>
            </div>
        )
    }
}

export default  FiltersSection ;