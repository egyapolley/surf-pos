import React from 'react';
import classes from './SideBarHeader.module.css'

function SideBarHeader(props) {
    return (
      <div className={classes.mainContainer}>
          <div className={classes.storeContainer}>
              <h3> OSU MALL STORE</h3>
          </div>
          <div className={classes.container}>
              <div className={classes.userIcon}>
                  <i className="fas fa-user fa-2x"/>
              </div>
              <div className={classes.userName}>
                  <h4>ANDY MARK</h4>
                  <h5>LOGIN:<span className={classes.time}>3.35PM,</span></h5>
                  <h5>12/09/2021</h5>
              </div>
          </div>
      </div>
    );
}

export default SideBarHeader;
