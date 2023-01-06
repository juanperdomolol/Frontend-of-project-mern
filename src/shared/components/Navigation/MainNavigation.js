import React,{useState} from "react";
import { Link } from "react-router-dom";

import "./MainNavigation.css";
import { MainHeader } from "./MainHeader";
import NavLinks from './NavLinks';
import SideDrawers from './SideDrawers';
import Backdrop from './../UIElements/Backdrop';

const MainNavigation = (props) => {
    const [drawerIsOpen, setDrawerIsOpen] = useState(false)
    const openOrCloseDrawer = () =>{
        setDrawerIsOpen(!drawerIsOpen);

    }
  return (
    <React.Fragment>
        {
            drawerIsOpen && <Backdrop onClick={openOrCloseDrawer} />
        }
        {
            drawerIsOpen &&(  <SideDrawers>
            <nav className="main-navigation__drawer-nav">
                <NavLinks />
            </nav>
             </SideDrawers> )

        }
   
    <MainHeader>
      <button className="main-navigation__menu-btn" onClick={openOrCloseDrawer}>
        <span />
        <span />
        <span />
      </button>
      <h1 className="main-navigation__title">
        <Link to="/"> your places </Link>
      </h1>
      <nav className="main-navigation__header-nav">
        <NavLinks/>
      </nav>
    </MainHeader>
    </React.Fragment>
  );
};

export default MainNavigation;
