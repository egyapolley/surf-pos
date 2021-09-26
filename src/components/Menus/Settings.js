import React, {useEffect, useState} from 'react';

import classes from "./Settings.module.css";

import {getUsers} from "../../data";
import CustomTableUsers from "../UI/CustomTableUsers";
import {Switch, Route} from "react-router-dom";
import DashBoard from "./DashBoard";
import User from "./User";
import Modal from "../UI/Modal";
import NewTransactionForm from "../UI/NewTransactionForm";
import AddNewUser from "./AddNewUser";
import DeleteBox from "../UI/DeleteBox";

function Settings(props) {


    const [users, setUsers] = useState([]);
    const [sortColumn, setSortColumn] = useState({
        path: "dateAdded",
        orderBy: "asc"
    })

    const [userToDelete, setUserToDelete] = useState(null)
    const [showModal, setShowModal] = useState(false)
    const [showModalAdd, setShowModalAdd] = useState(false)

    const handleDelete = (userId) => {
        console.log(userId, typeof  userId)
        const user = users.find(user =>user.id === userId)
        console.log(user)
        setUserToDelete(user)
        setShowModal(true)

    }

    const exitDeleteModal = () => {
        setShowModal(false)


    }

    const handleAddNew = () => {
        setShowModalAdd(true)

    }

    const exitAddUserModal = () =>{
        setShowModalAdd(false)
        props.history.replace("/settings")
    }


    useEffect(() => {
        const users = getUsers()
        setUsers(users)


    }, [])
    return (
        <>
            {showModalAdd && <Modal>
                <div style={{position:"relative"}}>
                    <div className={classes.closeContainer}>
                        <button onClick={exitAddUserModal}><i className="fas fa-window-close fa-2x"/></button>
                    </div>
                    <AddNewUser />
                </div>

            </Modal>}
            {showModal && userToDelete && <Modal>
                <DeleteBox user={userToDelete} cancel={exitDeleteModal} />
            </Modal>}

            <div className={classes.settings}>
                <header>
                    <h2>Settings</h2>
                    <h4>25th APRIL, 2021</h4>
                    <div className={classes.btnContainer}>
                        <button onClick={handleAddNew}>Add User</button>
                    </div>
                </header>

                <div className={classes.container}>
                    <CustomTableUsers data={users} onSort={setSortColumn} sortColumn={sortColumn}
                                      onDelete={handleDelete}/>
                    <div>
                        <Switch>
                            <Route path="/settings/users/:id" render={(props) => <User  {...props} />}/>
                        </Switch>

                    </div>
                </div>
            </div>
        </>

    )
}

export default Settings;
