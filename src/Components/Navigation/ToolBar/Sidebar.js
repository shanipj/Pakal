import React from 'react';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import './Sidebar.css';
import {Sidebar, InputItem, DropdownItem, Icon, Item, Logo, LogoText} from 'react-sidebar-ui';
import 'react-sidebar-ui/dist/index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
// import 'https://unpkg.com/react-sidebar-ui@1.2.0/dist/index.css';
import Backdrop from '../../UI/Backdrop/BackDrop';
import pakalLogo from '../../../images/logo/pakal_logo.png';


const sidebar = (props) => {
    return (
    <div>
    
    <Backdrop show ={!props.sideBar}
    clicked={props.closeSideBar}/>
    <div className="sideBar">
    <Sidebar isCollapsed={props.sideBar}
           bgColor= 'black'>
   
     <div id="sideBarContent">   
       
     <img src={pakalLogo} alt="pakallogo" />
            <Item bgColor='black' dir="rtl">
              <Icon> <FontAwesomeIcon icon={faCoffee} /></Icon>  
              <Link to="/area=north" areaname="north" onClick={props.closeSideBar}>צפון</Link>       
              
            </Item>
            <Item bgColor='black'>
              <Icon><FontAwesomeIcon icon={faCoffee} /></Icon>
              <Link to="/area=center" areaname="center" onClick={props.closeSideBar}>מרכז</Link>
             </Item>
            <Item bgColor='black'>
              <Icon><FontAwesomeIcon icon={faCoffee} /></Icon>
              <Link to="/area=south" areaname="south" onClick={props.closeSideBar}>דרום</Link>
            </Item>
              <Item bgColor='black'>
              <Icon><FontAwesomeIcon icon={faCoffee} /></Icon>
              <Link to="/info" onClick={props.closeSideBar}>?הידעת</Link>
              </Item>
            <Item bgColor='black'>
              <Icon><FontAwesomeIcon icon={faCoffee} /></Icon>
              <Link to="/sendform" onClick={props.closeSideBar}>שלח לנו המלצה</Link>
            </Item>
            
         
            </div> 
        </Sidebar>
      </div>
      </div>
    )
  };

  export default sidebar;

//   <FontAwesomeIcon icon="coffee" symbol />
//   <FontAwesomeIcon icon={['fas', 'coffee']} />
//    <FontAwesomeIcon icon={['far', 'coffee']} />
//    <FontAwesomeIcon icon={faCoffee} />

// <Logo/>

// <InputItem type='text' placeholder={'Search...'}/>
// <DropdownItem
// values={['First', 'Second', 'Third']}
// bgColor={'black'}>
// Menu
// </DropdownItem>