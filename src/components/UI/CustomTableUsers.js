import React from 'react';
import classes from './CustomTableUsers.module.css'
import {Link} from "react-router-dom";


function CustomTableUsers({data,onSort,sortColumn,onDelete}) {


    const getClasses =status =>{
        let color =""
        // eslint-disable-next-line default-case
        switch (status.toLowerCase()){
            case "active":
                color="darkgreen"
                break
            case "blocked":
                color="red"
                break
            case "created":
                color="black"
                break
        }

        return color
    }

    const handleSort =column=>{
        // eslint-disable-next-line no-use-before-define
        const sortColumnTemp = {...sortColumn}

            if (column ===sortColumnTemp.path ){
                sortColumnTemp.orderBy = sortColumnTemp.orderBy ==='asc'?"desc":"asc"
            }else {
                sortColumnTemp.path = column
                sortColumnTemp.orderBy="asc"
            }
           onSort(sortColumnTemp)


    }

    const displaySortImage =(column) =>{
        const {path, orderBy} = sortColumn
        if (column ===path){
            if (orderBy === 'asc'){
                return <i className="fas fa-sort-up sort"/>
            }else {
                return <i className="fas fa-sort-down sort"/>
            }
        }

    }


    return (
        <div className={classes.content}>
            <table>
                <thead>
                <tr>
                    <th onClick={()=>handleSort("fullName")}>Name {displaySortImage("fullName")}</th>
                    <th onClick={()=>handleSort("username")}>Username {displaySortImage("username")}</th>
                    <th onClick={()=>handleSort("status")}>Status {displaySortImage("status")}</th>
                    <th onClick={()=>handleSort("dateAdded")}>Date Added {displaySortImage("dateAdded")}</th>
                    <th onClick={()=>handleSort("role")}>Role{displaySortImage("role")}</th>
                </tr>
                </thead>
                <tbody>
                {
                    data.map(item => <tr key={item.id}>
                        <td className={classes.link}><Link to={`/settings/users/${item.id}`}>{item.fullName}</Link></td>
                        <td>{item.username}</td>
                        <td style={{color:getClasses(item.status)}}>{item.status}</td>
                        <td>{item.dateAdded}</td>
                        <td>{item.role}</td>
                        <td className={classes.link}><Link to={`/settings/users/${item.id}`}><i className="fas fa-user-edit"/></Link></td>
                        <td className={classes.trash}><button onClick={() =>onDelete(item.id)}><i className="fas fa-trash-alt"/></button></td>
                    </tr>)
                }

                </tbody>
            </table>

        </div>
    );
}

export default CustomTableUsers;
