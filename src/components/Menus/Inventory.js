import React, {useEffect, useState} from 'react';
import classes from "./Inventory.module.css";
import CustomTableUsers from "../UI/CustomTableUsers";
import {Route, Switch} from "react-router-dom";
import User from "./User";
import {getItems, getItemsIn} from "../../data";
import CustomTableInventory from "../UI/CustomTableInventory";
import _ from "lodash";



function Inventory(props) {

    const columnHeadingTable =[
        {
            key : "itemId",
            label: "Item ID"
        },
        {
            key : "itemName",
            label: "Item Description"
        },
        {
            key : "price",
            label: "Price (GHC)"
        },
        {
            key : "stockQuantity",
            label: "Stock Quantity"
        },
    ]

    const columnHeadingTable2 =[
        {
            key : "itemId",
            label: "Item ID"
        },
        {
            key : "itemName",
            label: "Item Description"
        },
        {
            key : "stockQuantity",
            label: "Quantity In"
        },
        {
            key : "dateIssued",
            label: "Date Issued"
        },
        {
            key : "",
            content: <button style={{color:"green"}}>Accept</button>
        },
        {
            key : "",
            content: <button style={{color:"red"}}>Reject</button>
        },


    ]

    const [sortColumn, setSortColumn] = useState({
        path: "stockQuantity",
        orderBy: "asc"
    })

    const [sortColumn2, setSortColumn2] = useState({
        path: "stockQuantity",
        orderBy: "asc"
    })

    const [items,setItems] = useState([])
    const [itemsIN, setItemsIN] = useState([])


    useEffect(() =>{
        setItems(getItems())
        setItemsIN(getItemsIn())
    },[])


    const sortedData = _.orderBy(items, [sortColumn.path], sortColumn.orderBy)

    const sortedData2 = _.orderBy(itemsIN, [sortColumn2.path], sortColumn2.orderBy)




    return (
        <div className={classes.inventory}>
            <header>
                <h2>Inventory</h2>
                <h4>25th APRIL, 2021</h4>
            </header>

            <div className={classes.container}>
               <div className={classes.tableWrapper}>
                   <h4>INVENTORY - CURRENT STOCK</h4>
                   <CustomTableInventory data={sortedData}
                                         onSort={setSortColumn}
                                         sortColumn={sortColumn}
                                         columnHeading={columnHeadingTable}
                                        />
               </div>
                <div className={classes.tableWrapper}>
                    <h4>INVENTORY - TRANSFER IN </h4>
                    <CustomTableInventory data={sortedData2}
                                          onSort={setSortColumn2}
                                          sortColumn={sortColumn2}
                                          columnHeading={columnHeadingTable2}
                                          />
                </div>
            </div>
        </div>
    );
}

export default Inventory;
