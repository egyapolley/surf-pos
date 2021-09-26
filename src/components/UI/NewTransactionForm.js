import React, {useState, useEffect} from 'react';
import classes from "./NewTransactionForm.module.css";
import * as yup from 'yup';
import {getBundles, getDeviceTypes, getTransactionTypes, getVoucherTypes} from "../../data";

const schemaALL = yup.object().shape({
    amount: yup.number().positive().required(),
    voucher: yup.string().required(),
    payment: yup.string().required(),
    msisdn: yup.string().required().matches(/233255[0-9]{6}/, "subscriber number is invalid format").label("Subscriber Number"),
    bndleType: yup.string().required(),
    bundle: yup.string().required(),
    device: yup.string().required(),
    momoProvider: yup.string().required(),
    momoNumber: yup.string().required().matches(/233[0-9]{9}/, "MoMo number is invalid format"),

})

const schemaMoMo = yup.object().shape({
    momoProvider: yup.string().required(),
    momoNumber: yup.string().required().matches(/233[0-9]{9}/, "MoMo number is invalid").label("MoMo number"),
})

const schemaVoucher = yup.object().shape({
    voucher: yup.string().required(),
    payment: yup.string().required(),

})
const schemaData = yup.object().shape({
    msisdn: yup.string().required().matches(/233255[0-9]{6}/, "subscriber number is invalid format").label("Subscriber Number"),
    bndleType: yup.string().required(),
    bundle: yup.string().required(),
    payment: yup.string().required(),

})
const schemaDev = yup.object().shape({
    device: yup.string().required(),
    payment: yup.string().required(),

})
const schemaCash = yup.object().shape({
    msisdn: yup.string().required().matches(/233255[0-9]{6}/, "subscriber number is invalid format").label("Subscriber Number"),
    amount: yup.number().positive().required(),
    payment: yup.string().required(),


})

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
    const [allBundles, setALlBundles] = useState(null)
    const [qty, setQty] = useState(1)

    const [totalCost, setTotalCost] = useState(parseFloat("0").toFixed(2))

    const [errors, setErrors] = useState({
        msisdn: "",
        bndleType: "",
        bundle: "",
        device: "",
        amount: "",
        voucher: "",
        payment: "",
        momoProvider: "",
        momoNumber: "",
    })

    const handleOnsubmit = async (event) => {
        event.preventDefault()

        console.log(device, amount, voucher, bundle, momoNumber, momoProvider, payment, msisdn)

        try {
            if (txnType === 'data') {
                await schemaData.validate({msisdn, bndleType, bundle, payment}, {abortEarly: false})
                await validateMoMo()

                setErrors({
                    txnType: "",
                    msisdn: "",
                    bndleType: "",
                    bundle: "",
                    device: "",
                    amount: "",
                    voucher: "",
                    payment: "",
                    momoProvider: "",
                    momoNumber: "",
                })
            } else if (txnType === 'cash') {
                await schemaCash.validate({msisdn, amount, payment}, {abortEarly: false})
                await validateMoMo()

                setErrors({
                    txnType: "",
                    msisdn: "",
                    bndleType: "",
                    bundle: "",
                    device: "",
                    amount: "",
                    voucher: "",
                    payment: "",
                    momoProvider: "",
                    momoNumber: "",
                })

            } else if (txnType === 'device') {
                await schemaDev.validate({msisdn, device, payment}, {abortEarly: false})
                await validateMoMo()
                setErrors({
                    txnType: "",
                    msisdn: "",
                    bndleType: "",
                    bundle: "",
                    device: "",
                    amount: "",
                    voucher: "",
                    payment: "",
                    momoProvider: "",
                    momoNumber: "",
                })

            } else if (txnType === 'voucher') {
                await schemaVoucher.validate({msisdn, voucher, payment}, {abortEarly: false})
                await validateMoMo()

                setErrors({
                    txnType: "",
                    msisdn: "",
                    bndleType: "",
                    bundle: "",
                    device: "",
                    amount: "",
                    voucher: "",
                    payment: "",
                    momoProvider: "",
                    momoNumber: "",
                })

            }

        } catch (ex) {
            console.log(JSON.stringify(ex.inner))
            setErrors(errors => ({
                ...parseError(ex.inner, errors)
            }))

        }


    }

    useEffect(() => {
        setTxnTypes(getTransactionTypes)
        setDeviceTypes(getDeviceTypes())
        setDevice(getDeviceTypes()[0].value)
        setVoucherTypes(getVoucherTypes())
        setVoucher(getVoucherTypes()[0].value)
        setTxnType(getTransactionTypes()[0].value)

    }, []);

    useEffect(() => {
        if (txnType === 'data' && msisdn.trim().length === 12) {
            const bundles = getBundles(msisdn)
            const bundleTypes = Object.keys(bundles)
            setBndleTypes(bundleTypes)
            setBndleType(bundleTypes[0])
            setALlBundles(bundles)
        }


    }, [msisdn])

    useEffect(() => {
        if (txnType === 'data' && bndleType && allBundles) {
            const bundles = allBundles[bndleType]
            setBundles(bundles)
            setBundle(bundles[0].bundleId)
        }

    }, [bndleType])

    useEffect(() => {
        if (payment === 'cash' || payment === 'card') {
            setMoMoNumber("")
            setMoMoProvider("")
        }

    }, [payment])


    const parseError = (ex, errors) => {
        let temp = {}
        for (const element of ex) {
            temp[element.path] = element.errors[0]
        }
        return {...errors, ...temp}

    }

    const validateMoMo = async () => {
        if (payment !== 'momo') return
        await schemaMoMo.validate({momoNumber, momoProvider}, {abortEarly: false})

    }

    const handleChange = async (event, func) => {
        const name = event.target.name
        const value = event.target.value
        func(value)
        try {
            await schemaALL.validateAt([name], {[name]: value})
            setErrors(errors => ({
                ...errors,
                [name]: ""
            }))
        } catch (ex) {
            console.log(errors)
        }
    }

    useEffect(() => {
        computeTotalCost()

    }, [bundle, device, amount, voucher,qty,txnType])

    const computeTotalCost = () => {
        if (txnType === 'data' && allBundles && bundle && bndleType && msisdn) {
            const bundles = allBundles[bndleType]
            console.log(bundle)
            const bundleObj = bundles.find(item => item.bundleId === bundle)
            const cost = bundleObj.cost.toFixed(2)
            setTotalCost(cost)
        } else if (txnType === 'device' && device) {
            const deviceObj = getDeviceTypes().find(item => item.value === device)
            const cost = (deviceObj.price * qty).toFixed(2)
            setTotalCost(cost)
        } else if (txnType === 'voucher' && voucher) {
            const voucherObj = getVoucherTypes().find(item => item.value === voucher)
            const cost = (voucherObj.price * qty).toFixed(2)
            setTotalCost(cost)
        } else if (txnType === 'cash' && amount && msisdn) {
            const cost = parseFloat(amount).toFixed(2)
            setTotalCost(cost)

        }

    }


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
                                    onChange={event => setTxnType(event.target.value)}>
                                {txnTypes.map(item => <option key={item.value}
                                                              value={item.value}>{item.label}</option>)}
                            </select>
                            {}
                        </div>
                        {(txnType === 'data' || txnType === 'cash') && <div className={classes.row}>
                            <label htmlFor="msisdn">Subscriber Number</label>
                            <input type="text"
                                   id="msisdn"
                                   value={msisdn}
                                   name="msisdn"
                                   onChange={event => handleChange(event, setMsisdn)}
                                   placeholder="Surfline number starting with 233.."/>
                            {errors['msisdn'] && <span className={classes.error}>{errors['msisdn']}</span>}
                        </div>}

                        {txnType === 'data' && bndleTypes.length > 0 && <div className={classes.row}>
                            <label htmlFor="">Bundle Type</label>
                            <select name="bndleType" id="bndleType"
                                    value={bndleType} onChange={event => handleChange(event, setBndleType)}>
                                {bndleTypes.map(item => <option key={item} value={item}>{item}</option>)}
                            </select>
                        </div>}
                        {txnType === 'data' && bundles.length > 0 && <div className={classes.row}>
                            <label htmlFor="">Bundle Name</label>
                            <select name="bundle" id="bundle" value={bundle}
                                    onChange={event => handleChange(event, setBundle)}>
                                {bundles.map(item => <option key={item.bundleId}
                                                             value={item.bundleId}>{`${item.bundleName} - (GHC${item.cost})`}</option>)}
                            </select>
                        </div>}
                        {txnType === 'cash' && <div className={classes.row}>
                            <label htmlFor="amount">Amount (GHC)</label>
                            <input type="text" id="amount" name="amount" value={amount}
                                   onChange={event => handleChange(event, setAmount)}/>
                            {errors['amount'] && <span className={classes.error}>required</span>}
                        </div>}
                        {txnType === 'device' && <div className={classes.row}>
                            <label htmlFor="device">Device Types</label>
                            <select name="device" id="device" value={device}
                                    onChange={event => handleChange(event, setDevice)}>
                                {deviceTypes.map(item => <option key={item.value}
                                                                 value={item.value}>{item.label}</option>)}
                            </select>
                        </div>}
                        {txnType === 'voucher' && <div className={classes.row}>
                            <label htmlFor="voucher">Voucher Types</label>
                            <select name="voucher" id="voucher" value={voucher}
                                    onChange={event => handleChange(event, setVoucher)}>
                                {voucherTypes.map(item => <option value={item.value}
                                                                  key={item.value}>{item.label}</option>)}
                            </select>
                        </div>}
                        {(txnType === 'device' || txnType === 'voucher') && <div className={classes.row}>
                            <label htmlFor="qty">Quantity</label>
                            <input type="number" id="qty" name="qty" min={1} max={1000} value={qty}
                                   onChange={event => handleChange(event, setQty)}/>
                        </div>}
                    </div>
                    <div>
                        <div className={classes.row}>
                            <h4>Pay With: {errors['payment'] && <span className={classes.error}>(required)</span>}</h4>
                        </div>
                        <div className={classes.radio}>
                            <div>
                                <input type="radio"
                                       name="payment"
                                       id="cashpay"
                                       checked={payment === 'cash'}
                                       value="cash" onChange={event => handleChange(event, setPayment)}/>
                                <label htmlFor="cashpay">Cash</label>
                            </div>
                            <div>
                                <input type="radio"
                                       name="payment"
                                       checked={payment === 'momo'}
                                       value="momo" onChange={event => handleChange(event, setPayment)}
                                       id="momopay"/>
                                <label htmlFor="momopay">MoMo</label>
                            </div>
                            <div>
                                <input type="radio"
                                       name="payment"
                                       checked={payment === 'card'}
                                       value="card" onChange={event => handleChange(event, setPayment)}
                                       id="cardpay"/>
                                <label htmlFor="cardpay">Card</label>
                            </div>
                        </div>

                        {payment === 'momo' && <div className={classes.row}>
                            <label htmlFor="momoProvider">MoMo Provider {errors['momoProvider'] &&
                            <span className={classes.error}>(required)</span>}</label>
                            <select name="momoProvider" id="momoProvider" value={momoProvider}
                                    onChange={event => handleChange(event, setMoMoProvider)}>
                                <option value=""></option>
                                <option value="mtn">MTN</option>
                                <option value="vodafone">Vodafone</option>
                                <option value="airtelTigo">Airtel/Tigo</option>

                            </select>
                        </div>}
                        {payment === 'momo' && <div className={classes.row}>
                            <label htmlFor="momoNumber">MoMo No.</label>
                            <input type="text" id="momoNumber" name="momoNumber" value={momoNumber}
                                   onChange={event => handleChange(event, setMoMoNumber)}/>
                            {errors['momoNumber'] && <span className={classes.error}>{errors['momoNumber']}</span>}
                        </div>}

                        <div className={classes.totalCost}>
                            <label htmlFor="totalCost">Total Cost (GHC):</label>
                            <output id="totalCost">{totalCost}</output>
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



