import React, { Component } from 'react';
import {connect} from 'react-redux'
import {newUserFunc} from "../action/usersAction"
import PropTypes from 'prop-types'

import AvatarPopup from './AvatarPopup'


class addNewUsers extends  Component{
    constructor(props){
        super(props);
        this.state = {
            nameError:'',
            aboutError: '',
            emailError: '',
            nameValue: '',
            aboutValue: '',
            emailValue: '',
            isActive: false,
            imgSelected: 'https://robohash.org/2?set=set3&size=100x100',
            avatarsIsOpened: false
        };
        this.newUserItem = {};
        this.addUser = this.addUser.bind(this);
        this.userIsValid = this.userIsValid.bind(this);

    }

    userIsValid(valueForFocus){
        const {nameValue,aboutValue, emailValue, isActive, imgSelected} = this.state;
        let newUser = {
            name: nameValue,
            picture:imgSelected,
            about:aboutValue,
            email:emailValue,
            isActive: isActive
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

    changeStateStatus(){
        if(this.state.isActive){
            this.setState({isActive :false})
        } else{
            this.setState({isActive : true})
        }
    }

    changeWindowAvatarState(){
        if(this.state.avatarsIsOpened){
            this.setState({avatarsIsOpened :false})
        } else{
            this.setState({avatarsIsOpened : true})
        }
    }

    changeAvatar(img){
        this.setState({imgSelected: img})
    }

    render(){
        let {nameError, aboutError, emailError, isActive, imgSelected, avatarsIsOpened} = this.state;
        return(
            <div className={'card'} >
                <div className="position">
                    <img src={imgSelected} alt="Avatar"
                         onClick={() => this.changeWindowAvatarState()}
                    />
                    <div className="name">
                        <input type="text" id="name"
                               placeholder="Put your name"
                               onBlur={()=>this.userIsValid('name')}
                               onChange={(event)=>{this.setState({nameValue: event.target.value})}}
                        />
                        <span className="error">{nameError}</span>
                    </div>
                    <button className="add" onClick={()=> this.addUser() }>Add</button>
                </div>
                <div className="about">
                    <input type="text" id="about"
                           placeholder="Put your text"
                           onBlur={()=>this.userIsValid('about')}
                           onChange={(event)=>{this.setState({aboutValue: event.target.value})}}
                    />
                    <span className="error">{aboutError}</span>
                </div>
                <div className="position">
                    <input type="email" id="email"
                           placeholder="Put your email"
                           onBlur={()=>this.userIsValid('email')}
                           onChange={(event)=>{this.setState({emailValue: event.target.value})}}
                    />
                    <span className="error">{emailError}</span>
                    <input type="checkbox"
                           checked={isActive}
                           onChange={()=>this.changeStateStatus()}
                    />
                </div>
                {avatarsIsOpened && <AvatarPopup changeAvatar={(img) => this.changeAvatar(img)}/>}
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