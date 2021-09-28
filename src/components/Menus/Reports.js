import React,{useState,useEffect,useMemo} from 'react';
import classes from "./Reports.module.css";
import DashBoardCard from "../UI/DashBoardCard";
import CustomTable from "../UI/CustomTable";
import {getTransactions, getUsers} from "../../data";
import _ from 'lodash'
import Pagination from "../UI/Pagination";
import paginate from "../../utils/paginate";
import Period from "../UI/Period";

import moment from "moment";

import fileDownload from  'js-file-download'
import {parse} from 'json2csv'

const fields = ['transactionId','customerId','transactionType','cost','payment','transactionDate', 'status'];
const opts = { fields, excelStrings:true };



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

    const [users, setUsers] = useState([])
    const [user, setUser] = useState("")


    const totalCount = transactions.length

    useEffect(() => {
        setTransactions(getTransactions)
       let users = getUsers()
        users =users.map(user =>{
            return {
                username:user.username,
                fullName:user.fullName
            }
        })
        users =[{username:'allUsers',fullName:'All Users'},...users]
        setUsers(users)
        setUser(users[0].username)
    }, []);

    const sortedData = _.orderBy(transactions, [sortColumn.path], sortColumn.orderBy)
    const paginatedData=paginate(sortedData,currentPage,pageLength)


    const handleExport = () =>{

        const csv = parse(sortedData,opts)

        fileDownload(csv, `Report-${moment().format("DD-MM-YYYY-HHmmss")}.csv`)

    }





    return (
        <div className={classes.dashboard}>
            <header>
                <h2>Reports</h2>
                <h3>25th APRIL, 2021</h3>
            </header>
            <div className={classes.periodContainer}>
                <div>
                    <select name="user" id="user" value={user} onChange={(event) =>setUser(event.target.value)}>
                        {users.map(user => <option key={user.username} value={user.username}>{user.fullName}</option>)}
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
                <div className={classes.exportContainer}>
                    <button onClick={handleExport}>Export <i className="fas fa-file-excel"/></button>
                </div>
                <CustomTable data={paginatedData} onSort={setSortColumn} sortColumn={sortColumn} />
                <div className={classes.paginateContainer}>
                    {totalCount > 0 && <Pagination totalCount={totalCount} pageLength={pageLength} onClick={setCurrentPage} currentPage={currentPage}/>}
                </div>

            </div>
        </div>
    );
}

export default Reports;
