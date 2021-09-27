import React from 'react';
import classes from './SidebarBody.module.css'
import {NavLink,Link} from "react-router-dom";


function SideBarBody(props) {

    console.log(JSON.stringify(props))

    const activeStyle = {
        // background:"#48bb40"
        background: "#156be3",
        color: "#fff"

    }





    return (
        <div className={classes.sidebarBody}>
            <ul>
                <li><NavLink to="/dashboard" activeStyle={activeStyle}><i
                    className="fas fa-tachometer-alt"/>Dashboard</NavLink></li>
                <li><NavLink to="/transactions" activeStyle={activeStyle}><i className="fas fa-exchange-alt"/>Transactions</NavLink>
                </li>
                <li><NavLink to="/reports" activeStyle={activeStyle}><i
                    className="fas fa-file-medical-alt"/>Reports</NavLink></li>
                <li><NavLink to="/inventory" activeStyle={activeStyle}><i className="fas fa-cart-arrow-down"/>Inventory</NavLink>
                </li>
                <li><NavLink to="/settings" activeStyle={activeStyle}><i className="fas fa-toolbox"/>Settings</NavLink>
                </li>
            </ul>
            <div className={classes.footer}>

                <Link to="/logout"><i className="fas fa-sign-out-alt"/>Sign Out</Link>
                <button >Change Password</button>


            </div>
        </div>

    );
}

export default SideBarBody;
