import React from 'react';
import clasess from './SidebarBody.module.css'

function SideBarBody(props) {


    return (
        <div className={clasess.sidebarBody}>
            <ul>
                <li><a href=""><i className="fas fa-tachometer-alt"/>Dashboard</a></li>
                <li><a href=""><i className="fas fa-exchange-alt"/>Transactions</a></li>
                <li><a href=""><i className="fas fa-file-medical-alt"/>Reports</a></li>
                <li><a href=""><i className="fas fa-cart-arrow-down"/>Inventory</a></li>
                <li><a href=""><i className="fas fa-toolbox"/>Settings</a></li>
            </ul>
            <div className={clasess.footer}>
                <a href=""><i className="fas fa-sign-out-alt"/>Sign Out</a>
            </div>
        </div>

    );
}

export default SideBarBody;
