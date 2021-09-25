import React, {useEffect, useState} from 'react';
import {getTransactions} from "../../data";
import _ from "lodash";
import paginate from "../../utils/paginate";
import classes from "./Transaction.module.css";
import DashBoardCard from "../UI/DashBoardCard";
import CustomTable from "../UI/CustomTable";
import Pagination from "../UI/Pagination";
import Modal from "../UI/Modal";
import NewTransactionForm from "../UI/NewTransactionForm";

const pageLength =15

function Transactions(props) {
    const [sortColumn, setSortColumn] = useState({
        path: "transactionDate",
        orderBy: "asc"
    })

    const [transactions, setTransactions] = useState([])
    const [currentPage, setCurrentPage] = useState(1)

    const [showModal, setShowModal] = useState(false)

    const totalCount = transactions.length

    useEffect(() => {
        setTransactions(getTransactions)
    }, []);

    const sortedData = _.orderBy(transactions, [sortColumn.path], sortColumn.orderBy)
    const paginatedData=paginate(sortedData,currentPage,pageLength)


    const handleNewTransaction =() =>{
        setShowModal(true)
    }

    const exitModal = () =>{
        setShowModal(false)
    }





    return (
        <>
            {showModal &&   <Modal >
                <NewTransactionForm cancel={exitModal}/>
            </Modal>}
            <div className={classes.transactions}>
                <header>
                    <h2>Transactions</h2>
                    <h4>25th APRIL, 2021</h4>
                    <div className={classes.btnContainer}>
                        <button onClick={handleNewTransaction}>NEW TRANSACTION</button>
                    </div>
                </header>

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
        </>

    );
}

export default Transactions;
