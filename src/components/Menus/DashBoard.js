import React,{useState,useEffect} from 'react';
import classes from "./Dashboard.module.css";
import DashBoardCard from "../UI/DashBoardCard";
import CustomTable from "../UI/CustomTable";
import {getTransactions} from "../../data";
import _ from 'lodash'
import Pagination from "../UI/Pagination";
import paginate from "../../utils/paginate";


const pageLength =15
function DashBoard(props) {

    const [sortColumn, setSortColumn] = useState({
        path: "transactionDate",
        orderBy: "asc"
    })

    const [transactions, setTransactions] = useState([])
    const [currentPage, setCurrentPage] = useState(1)

    const totalCount = transactions.length

    useEffect(() => {
        setTransactions(getTransactions)
    }, []);

    const sortedData = _.orderBy(transactions, [sortColumn.path], sortColumn.orderBy)
    const paginatedData=paginate(sortedData,currentPage,pageLength)





    return (
        <div className={classes.dashboard}>
            <header>
               <h2>Dashboard</h2>
                <h3>25th APRIL, 2021</h3>
            </header>
            <div className={classes.cardRow}>
                <DashBoardCard label="TOTAL SALES (GHC)" value="3,1000" color="green" />
                <DashBoardCard label="CASH SALES (GHC)" value="1,000" color="#102754"/>
                <DashBoardCard label="MOMO SALES (GHC)" value="2,1000" color="#156be3" />
                <DashBoardCard label="BALANCE SALES (GHC)" value="-1,000" color="red" />

            </div>
            <div className={classes.tableContainer}>
                <div className={classes.tableContainerHeader}>
                    <div>
                        <span>LAST 20 TRANSACTIONS</span>
                        <button>+check all</button>
                    </div>
                    <input type="text" placeholder="Search with MSISDN"/>
                </div>
                <CustomTable data={paginatedData} onSort={setSortColumn} sortColumn={sortColumn} />
                <div className={classes.paginateContainer}>
                    {totalCount > 0 && <Pagination totalCount={totalCount} pageLength={pageLength} onClick={setCurrentPage}
                                                   currentPage={currentPage}/>}
                </div>


            </div>
        </div>
    );
}

export default DashBoard;
