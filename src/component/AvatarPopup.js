import React, { Component } from 'react';
import {connect} from 'react-redux'

import '../style/Avatar.css';

class AvatarPopup extends  Component{
    constructor(props){
        super(props);
        this.state = {

        };
    }

    render(){
        return(
            <div className='avatarWindow'>
                {this.props.renderedUsers.map((item, index)=>{
                    return <img src={item.picture} key={index} onClick={()=>this.props.changeAvatar(item.picture)}/>
                })}
            </div>
        )
    }
}

const mapStateToProps = state =>({
    renderedUsers: state.users.renderedUsers
});
export default  connect(mapStateToProps, null)(AvatarPopup);