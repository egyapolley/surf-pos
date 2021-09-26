import React, {useState} from 'react';
import classes from "./AddNewUser.module.css";

function AddNewUser(props) {


    const [username, setUsername] = useState("");
    const [firstName, setFirstName] =useState("")
    const [lastName, setLastName] =useState("")
    const [pass, setPass] = useState("");
    const [pass2, setPass2] = useState("");
    const [phoneContact, setPhoneContact] = useState("")
    const [email, setEmail] = useState("")
    const [role, setRole] = useState("")


    return (
        <div className={classes.container}>
            <h3>Add New User</h3>
            <form action="">
                <div className={classes.formBody}>
                    <div>
                        <div className={classes.formControl}>
                            <label htmlFor="">Username</label>
                            <input type="text" value={username} onChange={event => setUsername(event.target.value)}/>
                        </div>
                        <div className={classes.formControl}>
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" id="firstName" value={firstName} onChange={event => setFirstName(event.target.value)} />
                        </div>
                        <div className={classes.formControl}>
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" id="lastName" value={lastName} onChange={event => setLastName(event.target.value)} />
                        </div>
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
                            <input type="email" id="email" value={email} onChange={event => setEmail(event.target.value)} />
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

        </div>
    );
}

export default AddNewUser;
