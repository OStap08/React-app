import React, { Component } from 'react';
import {connect} from 'react-redux'
import {newUserFunc} from "../action/usersAction"
import PropTypes from 'prop-types'


class addNewUsers extends  Component{
    constructor(props){
        super(props);
        this.state = {
            nameError:'',
            aboutError: '',
            emailError: '',
        };
        this.newUserItem = {};
        this.addUser = this.addUser.bind(this);
        this.userIsValid = this.userIsValid.bind(this);

    }

    userIsValid(valueForFocus){
        let newUser = {
            name:document.getElementById("name").value,
            picture:'https://robohash.org/1?set=set3&size=100x100',
            about:document.getElementById("about").value,
            email:document.getElementById("email").value,
            isActive:document.getElementById("isActive").checked
        };

        if (newUser[valueForFocus] === "")  {
            this.setState({[valueForFocus+"Error"]: 'Put your ' + valueForFocus});
        }else {
            this.setState({[valueForFocus+"Error"]: ''});
        }

        let isValid = true;

        for(let field in newUser){
            if(newUser[field] === ''){
                isValid = false
            }
        }
        this.newUserItem = newUser;
        return isValid;
    }

    addUser(){
        this.props.newUserFunc(this.userIsValid(), this.newUserItem);
    }

    render(){
        let {nameError, aboutError, emailError} = this.state;
        return(
            <div className={'card'} >
                <div className="position">
                    <img src="https://robohash.org/2?set=set3&size=100x100" alt="Avatar"/>
                    <div className="name"><input type="text" id="name" placeholder="Put your name" onBlur={()=>this.userIsValid('name')}/>
                        <span className="error">{nameError}</span>
                    </div>
                    <button className="add" onClick={()=> this.addUser() }>Add</button>
                </div>
                <div className="about">
                    <input type="text" id="about" placeholder="Put your text" onBlur={()=>this.userIsValid('about')}/>
                    <span className="error">{aboutError}</span>
                </div>
                <div className="position">
                    <input type="email" id="email" placeholder="Put your email" onBlur={()=>this.userIsValid('email')}/>
                    <span className="error">{emailError}</span>
                    <input type="checkbox" id="isActive"/>
                </div>
            </div>
        )
    }
}

addNewUsers.propTypes = {
    newUser: PropTypes.func.isRequired,
};
const mapStateToProps = state =>({
    renderedUsers: state.users.renderedUsers
});
export default  connect(mapStateToProps, {newUserFunc})(addNewUsers);