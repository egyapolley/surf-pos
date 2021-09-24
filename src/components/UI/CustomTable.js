import React from 'react';
import classes from './CustomTable.module.css'
import {Link} from "react-router-dom";


function CustomTable({data,onSort,sortColumn}) {


    const getClasses =status =>{
        let color =""
        // eslint-disable-next-line default-case
        switch (status.toLowerCase()){
            case "successful":
                color="darkgreen"
                break
            case "failed":
                color="red"
                break
            case "pending":
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
                    <th onClick={()=>handleSort("transactionId")}>TRANSACTION ID {displaySortImage("transactionId")}</th>
                    <th onClick={()=>handleSort("customerId")}>MSISDN {displaySortImage("customerId")}</th>
                    <th onClick={()=>handleSort("transactionType")}>TYPE {displaySortImage("transactionType")}</th>
                    <th onClick={()=>handleSort("cost")}>COST(GHC) {displaySortImage("cost")}</th>
                    <th onClick={()=>handleSort("payment")}>PAYMENT{displaySortImage("payment")}</th>
                    <th onClick={()=>handleSort("transactionDate")}>DATE {displaySortImage("transactionDate")}</th>
                    <th onClick={()=>handleSort("status")}>STATUS {displaySortImage("status")}</th>
                </tr>
                </thead>
                <tbody>
                {
                    data.map(item => <tr key={item.id}>
                        <td>{item.transactionId}</td>
                        <td>{item.customerId}</td>
                        <td>{item.transactionType}</td>
                        <td>{item.cost}</td>
                        <td>{item.payment}</td>
                        <td>{item.transactionDate}</td>
                        <td style={{color:getClasses(item.status)}}>{item.status}</td>
                    </tr>)
                }

                </tbody>
            </table>

        </div>
    );
}

export default CustomTable;
