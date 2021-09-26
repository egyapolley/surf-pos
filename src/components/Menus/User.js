import React, {useEffect, useState} from 'react';
import classes from "./User.module.css";
import {getUsers} from "../../data";

function User(props) {
    const id = props.match.params.id


    const [user, setUser] = useState(null)
    const [status, setStatus] = useState("")
    const [role, setRole] = useState("")


    const [pass, setPass] = useState("*****")
    const [pass2, setPass2] = useState("*****")
    const [phoneContact, setPhoneContact] = useState("")






    useEffect(() => {
        if (id) {
            const users = getUsers()
            const user = users.find(user => user.id.toString() === id)
            setUser(user)
            setRole(user.role)
            setPhoneContact(user.phoneContact)
            if (user.status !== 'CREATED') setStatus(user.status)

        }

    }, [id])


    return (
        <>
            {user && <div className={classes.container}>
                <h3>Edit Account</h3>
                <form action="">
                    <div className={classes.formBody}>
                        <div>
                            <div className={classes.formControl}>
                                <label htmlFor="">Username</label>
                                <input type="text" value={user.username} disabled={true}/>
                            </div>
                            <div className={classes.formControl}>
                                <label htmlFor="">Full Name</label>
                                <input type="text" value={user.fullName} disabled={true}/>
                            </div>
                            {user.status !== 'CREATED' && <div className={classes.formControl}>
                                <label htmlFor="id">Status</label>
                                <select name="status" id="status" value={status}
                                        onChange={event => setStatus(event.target.value)}>
                                    <option value="blocked">BLOCK</option>
                                    <option value="active">ACTIVE</option>
                                </select>
                            </div>}
                            {user.status === 'CREATED' && <div className={classes.formControl}>
                                <label htmlFor="status">Status</label>
                                <input type="text" id="status" value="CREATED" disabled={true}/>

                            </div>}
                            <div className={classes.formControl}>
                                <label htmlFor="role">Role</label>
                                <select name="role" id="role" value={role}
                                        onChange={event => setRole(event.target.value)}>
                                    <option value="Cashier">Cashier</option>
                                    <option value="Manager">Manager</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <div className={classes.formControl}>
                                <label htmlFor="">Phone Contact</label>
                                <input type="text" value={phoneContact}
                                       onChange={event => setPhoneContact(event.target.value)}/>
                            </div>
                            <div className={classes.formControl}>
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" value={user.email} disabled={true}/>
                            </div>
                            <div className={classes.formControl}>
                                <label htmlFor="pass">Password</label>
                                <input type="password" id="pass" value={pass}
                                       onChange={event => setPass(event.target.value)}/>
                            </div>
                            <div className={classes.formControl}>
                                <label htmlFor="pass2">Confirm Password</label>
                                <input type="password" id="pass2" value={pass2}
                                       onChange={event => setPass2(event.target.value)}/>
                            </div>
                        </div>
                    </div>
                    <div className={classes.actionBtnContainer}>
                        <button type="submit">Save</button>
                    </div>
                </form>

            </div>}
        </>

    );
}

export default User;
