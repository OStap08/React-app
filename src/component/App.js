import React, { Component } from 'react';

import UserList from "./usersList";
import FiltersSection from "./FiltersSection"
import Tabs from './Tabs(component)'
import '../style/App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openedReport: 0,
            reports: [{title: "Report"}],
        };
    }

    addNewReport(){
        let newReport = {
            title: "Your title"
        };
        let newReportsArray = this.state.reports;
        newReportsArray.push(newReport);
        let lastReport = this.state.reports.length - 1;
        this.setState({reports: newReportsArray, openedReport: lastReport});
    }

    removeReport(deletedReportIndex){
        let newReportsArr = [];
        this.state.reports.map((tab,i) =>{
            if (i !== deletedReportIndex){
                newReportsArr.push(tab);
            }
        });
        this.setState({reports: newReportsArr, openedReport: deletedReportIndex - 1})
    }

  render() {
      const {openedReport, reports} = this.state;
      return (
          <div>
              <Tabs
                  onAddTab={()=> this.addNewReport()}
                  onTabClose={(tabIndex)=> this.removeReport(tabIndex)}
                  onTabSelect={tabIndex => this.setState({openedReport: tabIndex})}
                  selectedTab={openedReport}
                  tabs={reports}
                  addTabTitle="Add new report"
              />
              <FiltersSection/>
              <UserList />
          </div>
      );
  }
}



export default App;
