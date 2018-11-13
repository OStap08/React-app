import React, { Component } from 'react';

class addNewUsers extends  Component{
    constructor(props){
        super(props);
        this.state = {
            nameError:'',
            aboutError: '',
            emailError: ''
        };
        this.newUser = {};
        this.addUser = this.addUser.bind(this);
        this.userIsValid = this.userIsValid.bind(this);

    }

    userIsValid(){
        let newUser = {
            name:document.getElementById("name").value,
            picture:'https://robohash.org/1?set=set3&size=100x100',
            about:document.getElementById("about").value,
            email:document.getElementById("email").value,
            isActive:document.getElementById("isActive").checked
        };
        let isValid = true;

        for(let field in newUser) {
            if (newUser[field] === "")  {
                isValid = false;
                this.setState({[field+"Error"]: 'Put your ' + field});
            }else {
                this.setState({[field+"Error"]: ''});
            }
        }
        this.newUser = newUser;
        return isValid;
    }

    addUser(){
        if(this.userIsValid() ){
            let users = this.props.allUsers;
            users.push(this.newUser);
            this.props.updateUsersList(users, users);
        }
    }

    render(){
        let {nameError, aboutError, emailError} = this.state;
        return(
            <div className={'card'} >
                <div className="position">
                    <img src="https://robohash.org/2?set=set3&size=100x100" alt="Avatar"/>
                    <div className="name"><input type="text" id="name" placeholder="Put your name"/>
                        <span className="error">{nameError}</span>
                    </div>
                    <button className="add" onClick={()=> this.addUser() }>Add</button>
                </div>
                <div className="about">
                    <input type="text" id="about" placeholder="Put your text"/>
                    <span className="error">{aboutError}</span>
                </div>
                <div className="position">
                    <input type="email" id="email" placeholder="Put your email"/>
                    <span className="error">{emailError}</span>
                    <input type="checkbox" id="isActive"/>
                </div>
            </div>
        )
    }
}

export default  addNewUsers ;