import React, { Component } from 'react';
import UserList from "./usersList";
import FiltersSection from "./FiltersSection"
import '../style/App.css';

class App extends Component {

  render() {
      return (
          <div>

              <FitersSection/>
              <UserList />
          </div>
      );
  }

}



export default App;
