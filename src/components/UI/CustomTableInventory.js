import React from 'react';
import classes from './CustomTableInventory.module.css'
import {Link} from "react-router-dom";


function CustomTableInventory({data, onSort, sortColumn, columnHeading}) {


    const getClasses = status => {
        let color = ""
        // eslint-disable-next-line default-case
        switch (status.toLowerCase()) {
            case "active":
                color = "darkgreen"
                break
            case "blocked":
                color = "red"
                break
            case "created":
                color = "black"
                break
        }

        return color
    }

    const handleSort = column => {
        // eslint-disable-next-line no-use-before-define
        const sortColumnTemp = {...sortColumn}

        if (column === sortColumnTemp.path) {
            sortColumnTemp.orderBy = sortColumnTemp.orderBy === 'asc' ? "desc" : "asc"
        } else {
            sortColumnTemp.path = column
            sortColumnTemp.orderBy = "asc"
        }
        onSort(sortColumnTemp)


    }

    const displaySortImage = (column) => {
        const {path, orderBy} = sortColumn
        if (column === path) {
            if (orderBy === 'asc') {
                return <i className="fas fa-sort-up sort"/>
            } else {
                return <i className="fas fa-sort-down sort"/>
            }
        }

    }


    return (
        <div className={classes.content}>
            <table>
                <thead>
                <tr>
                    {columnHeading.map(item => <th onClick={() => handleSort(item.key)}>
                        {item.label}{displaySortImage(item.key)}
                    </th>)}

                </tr>
                </thead>
                <tbody>
                {
                    data.map((item,index) => <tr key={index}>
                        {/*<td>{item.itemId}</td>*/}
                        {/*<td>{item.itemName}</td>*/}
                        {/*<td >{item.price}</td>*/}
                        {/*<td>{item.stockQuantity}</td>*/}

                        {columnHeading.map((column,index) =><td key={index}>
                            {column.content||item[column.key]}
                        </td>)}

                        {/*<td className={classes.trash}>*/}
                        {/*    <button onClick={() => onDelete(item.id)}><i className="fas fa-trash-alt"/></button>*/}
                        {/*</td>*/}
                    </tr>)
                }

                </tbody>
            </table>

        </div>
    );
}

export default CustomTableInventory;
