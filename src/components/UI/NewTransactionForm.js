import React, {useState,useEffect} from 'react';
import classes from "./NewTransactionForm.module.css";
import {getDeviceTypes, getTransactionTypes, getVoucherTypes} from "../../data";

function NewTransactionForm(props) {

    const {cancel} = props

    const [txnType, setTxnType] = useState("")
    const [txnTypes, setTxnTypes] = useState([])
    const [msisdn, setMsisdn] = useState("")
    const [bndleType, setBndleType] = useState("")
    const [bndleTypes, setBndleTypes] = useState([])
    const [bundle, setBundle] = useState("")
    const [bundles, setBundles] = useState([])
    const [deviceTypes, setDeviceTypes] = useState([])
    const [voucherTypes, setVoucherTypes] = useState([])
    const [device, setDevice] = useState("")
    const [amount, setAmount] = useState("")
    const [voucher, setVoucher] = useState("")
    const [payment, setPayment] = useState("")
    const [momoProvider, setMoMoProvider] = useState("")
    const [momoNumber, setMoMoNumber] = useState("")

    const  handleOnsubmit =(event) =>{
        event.preventDefault()
        console.log(device, txnType)


    }

    useEffect(() => {
        setTxnTypes(getTransactionTypes)
        setDeviceTypes(getDeviceTypes())
        setDevice(getDeviceTypes()[0].value)
        setVoucherTypes(getVoucherTypes())
        setTxnType(getTransactionTypes()[0].value)

    }, []);





    return (
        <div className={classes.container}>
            <h3>NEW TRANSACTION</h3>

            <div className={classes.body}>
                <form action="" onSubmit={handleOnsubmit}>
                    <div>
                        <div className={classes.row}>
                            <label htmlFor="txnType">Transaction Type</label>
                            <select name="txnType"
                                    id="txnType"
                                    value={txnType}
                                    onChange={event=>setTxnType(event.target.value)}>
                                {txnTypes.map(item => <option key={item.value} value={item.value}>{item.label}</option>)}
                            </select>
                        </div>
                        <div className={classes.row}>
                            <label htmlFor="msisdn">Subscriber Number</label>
                            <input type="text"
                                   id="msisdn"
                                   value={msisdn}
                                   name="msisdn"
                                   onChange={event => setMsisdn(event.target.value)}
                                   placeholder="Surfline number starting with 233.."/>
                        </div>
                        {txnType ==='data' && bndleTypes.length >0 &&  <div className={classes.row}>
                            <label htmlFor="">Bundle Type</label>
                            <select name="bndleType" id="bndleType"
                                    value={bndleType} onChange={event =>setBndleType(event.target.value)}>
                                {bndleTypes.map(item =><option key={item.value} value={item.value}>{item.label}</option>)}
                            </select>
                        </div>}
                        {bundles.length >0 &&  <div className={classes.row}>
                            <label htmlFor="">Bundle Name</label>
                            <select name="bundle" id="bundle" value={bundle} onChange={event => setBundle(event.target.value)}>
                                {bundles.map(item =><option key={item.value} value={item.value}>{item.label}</option>)}
                            </select>
                        </div>}
                        {txnType === 'cash' &&  <div className={classes.row}>
                            <label htmlFor="amount">Amount (GHC)</label>
                            <input type="text" id="amount" name="cash" value={amount} onChange={event => setAmount(event.target.value)}/>
                        </div>}
                        {txnType ==='device'  &&   <div className={classes.row}>
                            <label htmlFor="device">Device Types</label>
                            <select name="device" id="device" value={device} onChange={event => setDevice(event.target.value)}>
                                {deviceTypes.map(item =><option key={item.value} value={item.value}>{item.label}</option>)}
                            </select>
                        </div>}
                        {txnType ==='voucher' &&   <div className={classes.row}>
                            <label htmlFor="voucher">Voucher Types</label>
                            <select name="voucher" id="voucher" value={voucher} onChange={event =>setVoucher(event.target.value)}>
                                {voucherTypes.map(item =><option value={item.value} key={item.value}>{item.label}</option>)}
                            </select>
                        </div>}

                    </div>
                    <div>
                        <div className={classes.row}>
                            <h4>Pay With:</h4>
                        </div>
                        <div className={classes.radio}>
                            <div>
                                <input type="radio" name="payment" id="cashpay"/>
                                <label htmlFor="cashpay">Cash</label>
                            </div>
                            <div>
                                <input type="radio" name="payment" id="momopay"/>
                                <label htmlFor="momopay">MoMo</label>
                            </div>

                        </div>
                        <div className={classes.row}>
                            <label htmlFor="">MoMo Provider</label>
                            <select name="" id="">
                                <option value="">Device</option>
                                <option value="">Data</option>
                                <option value="">Cash</option>
                                <option value="">Scratch Card</option>
                            </select>
                        </div>
                        <div className={classes.row}>
                            <label htmlFor="cash">MoMo No.</label>
                            <input type="text" id="cash" name="cash"/>
                        </div>
                        <div className={classes.actionBtnContainer}>
                            <button type="button" onClick={cancel}>Cancel</button>
                            <button type="submit">Submit</button>

                        </div>

                    </div>
                </form>
            </div>

        </div>
    );
}

export default NewTransactionForm;
