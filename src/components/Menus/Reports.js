import React,{useState,useEffect,useMemo} from 'react';
import classes from "./Reports.module.css";
import DashBoardCard from "../UI/DashBoardCard";
import CustomTable from "../UI/CustomTable";
import {getTransactions} from "../../data";
import _ from 'lodash'
import Pagination from "../UI/Pagination";
import paginate from "../../utils/paginate";
import Period from "../UI/Period";


const pageLength =15
function Reports(props) {

    const periods = useMemo(() =>{
        return [
            {value:"today", label:"TODAY"},
            {value:"7days", label:"7 DAYS"},
            {value:"30days", label:"30 DAYS"},
        ]
    },[])

    const [sortColumn, setSortColumn] = useState({
        path: "transactionDate",
        orderBy: "asc"
    })

    const [currentPeriod, setCurrentPeriod] = useState("today")

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
                <h2>Reports</h2>
                <h3>25th APRIL, 2021</h3>
            </header>
            <div className={classes.periodContainer}>
                <div>
                    <select name="" id="">
                        <option value="test">All Users</option>
                        <option value="test2">Kwame Yaw</option>
                        <option value="test2">Prince</option>
                    </select>
                </div>
               <Period periods={periods} onClick={setCurrentPeriod} currentPeriod={currentPeriod}/>
            </div>
            <div className={classes.cardRow}>
                <DashBoardCard label="DATA SALES (GHC)" value="5,100" color="green" />
                <DashBoardCard label="DEVICES SALES (GHC)" value="2,000" color="#102754"/>
                <DashBoardCard label="CASH SOLD (GHC)" value="2,100" color="#F6C90E" />
                <DashBoardCard label="VOUCHER SALES (GHC)" value="1,100" color="#156be3" />
                <DashBoardCard label="TOTAL SALES (GHC)" value="11,300" color="#22AFF1" />

            </div>
            <div className={classes.tableContainer}>
                {/*<div className={classes.tableContainerHeader}>*/}
                {/*</div>*/}
                <CustomTable data={paginatedData} onSort={setSortColumn} sortColumn={sortColumn} />
                <div className={classes.paginateContainer}>
                    {totalCount > 0 && <Pagination totalCount={totalCount} pageLength={pageLength} onClick={setCurrentPage} currentPage={currentPage}/>}
                </div>

            </div>
        </div>
    );
}

export default Reports;
