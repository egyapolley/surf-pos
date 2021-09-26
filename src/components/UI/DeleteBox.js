import React from 'react';
import classes from "./DeleteBox.module.css";

function DeleteBox({user,cancel}) {



    return (
        <div className={classes.messageBoxContainer}>
            <h3><i className="fas fa-exclamation-triangle"/>&nbsp;&nbsp;ALERT</h3>
            <div className={classes.messageBox}>
                Are you sure you want to remove  <span className={classes.messageboxUserId}>{`"${user.fullName}"`}</span> &nbsp;from East-Legon Store ?
            </div>
            {/*{showDialogProgress &&  <div  className="progressIndicator">*/}
            {/*    <img src="/images/ajax-loader.gif" alt="Processing"/>*/}
            {/*</div>}*/}

            <div className={classes.buttonGroup}>
                <button onClick={cancel}>Cancel</button>
                <button  onClick={null}>Proceed</button>
            </div>
        </div>
    );
}

export default DeleteBox;
