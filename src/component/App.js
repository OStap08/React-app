import React, { Component } from 'react';
import UserList from "./usersList";
import FiltersSection from "./FiltersSection"
import '../style/App.css';

class App extends Component {

  constructor(){
      super();
        this.state = {
          renderedUsers:[],
          allUsers: []
        };
      this.loadDataUsers = this.loadDataUsers.bind(this);
      this.loadDataUsers();
  }

  loadDataUsers(){
      fetch('http://www.json-generator.com/api/json/get/cpTmnSrPCa?indent=2')
          .then(response => response.json())
          .then(obj =>{
              this.setState({renderedUsers: obj, allUsers: obj });
          });
  }
  updateUsersList(newRenderedUsers, newAllUsers){
      this.setState({renderedUsers: newRenderedUsers, allUsers: newAllUsers});
  }
  render() {
      return (
          <div>
              <FiltersSection allUsers = {this.state.allUsers}
                              updateUsersList = {(arrDataUsers, newAllUsers) =>{this.updateUsersList(arrDataUsers, newAllUsers)}} />
              <UserList renderedUsers = {this.state.renderedUsers}
                        allUsers = {this.state.allUsers}
                        updateUsersList = {(newRenderedUsers, newAllUsers) =>{this.updateUsersList(newRenderedUsers, newAllUsers)}}
              />
          </div>
      );
  }
}


export default App;
