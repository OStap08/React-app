import React, { Component } from 'react';
import '../style/User.css';

class User extends Component{
    constructor(props){
        super(props);
        this.state = {
            isBookmarked: false
        };
        this.indexFotDelete = this.indexFotDelete.bind(this);
    }
    indexFotDelete(){
        this.props.deleteUser(this.props.index);
    }
    render(){
        const {name, picture, about, email, isActive} = this.props.user;
        const {isBookmarked} = this.state;
        return(
            <div className={ `card ${isBookmarked ? "isDataVisible" : ""}`}
                 onClick={()=>{this.setState({isBookmarked: !isBookmarked})}}
            >
                <div className = "position">
                    <img src={picture} alt = "Avatar"/>
                    <div className = "name">{name}</div>
                    <button className = "delete" onClick = {this.indexFotDelete} >Delete</button>
                </div>
                <div className = "about">{about}</div>
                <div className = "position">
                    <span>{email}</span>
                    <span>
                        {isActive ? <span className = "online">online</span> : <span className = "offline">offline</span>}
                    </span>
                </div>
            </div>
        );
    }
}

export default User;