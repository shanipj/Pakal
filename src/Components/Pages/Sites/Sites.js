import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Sites.css'
import { Container } from "react-bootstrap";
import Cards from './Cards';
import ToolBar from '../../Navigation/ToolBar/Toolbar';
import Modal from '../../Home/Modal/Modal';
import { datasites } from './datasites';
import { withRouter } from 'react-router-dom';
import axios from "axios";
import SitesData from './SitesData';
import ExternalLinks from '../../UI/ExternalLinks/ExternalLinks';

// import Inputs from './Inputs';
// import sidebar from '../../Navigation/ToolBar/SideBar';


const filters = [
  { name: "נגיש לנכים", value: 1, status: false },
  { name: "מסלול הליכה", value: 2, status: false },
  { name: "מקום שקט", value: 3, status: false },
  { name: "מתאים למשפחות", value: 4, status: false }
];
const areas = [
  { name: "north", status: false },
  { name: "center", status: false },
  { name: "south", status: false }
];



class Sites extends Component {
  state = {
    datasites,
    sitesDB:[],
    areas,
    filters,
    all: true,
    show: false,
    selectedSiteIndex: 0,
    fadeout: false,
    areaIndex: 0,
    filterArray: [],
    lastArea: "",

    // sideBar: true

  }
  //close modal on click
  CancelHandler = () => {
    this.setState({ show: false })
  }
  //open modal on click on site
  showModal = (site) => {
    site.preventDefault();
    this.setState({ show: true })
    //check the number of the site in the array and update selectedSiteIndex
    let areaIndex = site.currentTarget.dataset.id - 1;
    ;
    this.setState({
      selectedSiteIndex: areaIndex
    })
  };
  

  //import the data from MongoDB to the modal using the server(called in 'show modal' function)
  importDataToModal = () => {
    axios.get("/getinfo").then(response => {

      let datasite = {}
      if (typeof response.data === "object") {
        datasite = response.data;
      }//convert string to object 
      else if (typeof response.data === "string") {
        datasite = JSON.parse(response.data);
      }
      else {
        datasite = {};

      }
      console.log(typeof datasite);
      //update siteDB with all the data from DB
      this.setState({
        sitesDB: datasite
      })
    });
  }
  //Translate the area from the array to hebrew
  setArea = (area) => {
    let selectesAreaName = "מרכז";
    if (area === "north") {
      selectesAreaName = "צפון"
    }
    else if (area === "south") {
      selectesAreaName = "דרום"
    }
    else if (area === "center") {
      selectesAreaName = "מרכז"
    }
    return selectesAreaName;
  };

  //filter the sites by area and than by tags.
  filtersites = () => {
    //get the type of area that the user clicked on.
    let areaName = this.props.match.params.areaName;
    let filterDataSites = datasites;

    if (areaName) {
      filterDataSites = filterDataSites.filter(site => site.area === areaName)
    }

    if (this.state.lastArea !== areaName) {
      this.setState({ lastArea: areaName, filterArray: [] });

    }
    if (this.state.filterArray.length !== 0) {
      filterDataSites = filterDataSites.filter(site => site.tags && site.tags.some(tag => this.state.filterArray.indexOf(tag) >= 0));
    }
    return filterDataSites;
  };

  //return boolean of the tag button- for css color. 
  isChecked = (name) => {
    let res = this.state.filterArray.indexOf(name) >= 0;
    return res;
  }
  //when user click on tag botton -update filterArray that in state. 
  hendleCheck = (event) => {
    let newFilteredTag = this.state.filterArray;
    if (event.target.checked && newFilteredTag.indexOf(event.target.name) < 0) {
      newFilteredTag.push(event.target.name);
    }
    else {
      newFilteredTag.splice(newFilteredTag.indexOf(event.target.name), 1);
    }
    console.log(newFilteredTag);
    this.setState(newFilteredTag);
  }

  render() {
    const selectedArea = this.props.match.params.areaName;

    return (
      <div className="sitespage">
        <ToolBar sideBar={this.props.sideBar} onClick={this.props.showSideBar} closeSideBar={this.props.closeSideBar} />
        <div className="sites">

          <h2> המלצות באיזור ה{this.setArea(selectedArea)}</h2>
          <hr />
          <ul >
            <li>
              <input
                id="quiteplace" name="מקום שקט"
                type="checkbox"
                checked={this.isChecked("מקום שקט")}
                onChange={this.hendleCheck}
              />
              <label htmlFor="quiteplace">מקום שקט</label>
            </li>
            <li>
              <input
                id="families" name="מתאים למשפחות"
                type="checkbox"
                checked={this.isChecked("מתאים למשפחות")}
                onChange={this.hendleCheck}
              />
              <label htmlFor="families">מתאים למשפחות</label>
            </li>
            <li>
              <input
                id="walking" name="מסלול הליכה"
                type="checkbox"
                checked={this.isChecked("מסלול הליכה")}
                onChange={this.hendleCheck}
              />
              <label htmlFor="walking">מסלול הליכה</label>
            </li>
            <li>
              <input
                id="disabilites" name="נגיש לנכים"
                type="checkbox"
                checked={this.isChecked("נגיש לנכים")}
                onChange={this.hendleCheck}
              />
              <label htmlFor="disabilites">נגיש לנכים</label>
            </li>
          </ul>

          <Container>
            <Cards imgs={this.filtersites()} onClick={(e) => { this.showModal(e); this.importDataToModal(); }} />
          </Container>
        </div>

        <div>
          <Modal show={this.state.show} modalClosed={this.CancelHandler}>
            <SitesData selectedSiteIndex={this.state.selectedSiteIndex}
              sitesDB={this.state.datasites}
            />

          </Modal>
        </div>


        <ExternalLinks/>
      </div>




    );

  }
}



export default withRouter(Sites);



