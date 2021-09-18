import React from 'react';
import SideBarHeader from "./SideBarHeader";
import SideBarBody from "./SideBarBody";
import classes from './Sidebar.module.css'
import Logo from "./Logo";

function SideBar(props) {
    return (
        <div className={classes.sidebar}>
            <Logo/>
            <SideBarHeader/>
            <SideBarBody/>
        </div>
    );
}

export default SideBar;
