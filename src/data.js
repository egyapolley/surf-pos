
const DUMMY_DATA = [
    {
        id: 1,
        payment:'Mobile Money',
        transactionId:'00012345671',
        customerId:233255000102,
        transactionType:"1.6GB Bundle",
        transactionDate:"09/09/2021",
        status:"Successful",
        cost:50
    },
    {
        id:2,
        payment:'Mobile Money',
        transactionId:'000123145671',
        customerId:233255020102,
        transactionType:"7GB Bundle",
        transactionDate:"09/09/2021",
        status:"Failed",
        cost:100
    },
    {
        id:3,
        payment:'Cash',
        transactionId:'000193145671',
        customerId:233255020102,
        transactionType:"5GHC Voucher",
        transactionDate:"09/09/2021",
        status:"Successful",
        cost:5
    },
    {
        id:4,
        payment:'Cash',
        transactionId:'007193145671',
        customerId:233255020102,
        transactionType:"Huawei Mi-Fi",
        transactionDate:"09/10/2021",
        status:"Successful",
        cost:250
    },
    {
        id:5,
        payment:'Cash',
        transactionId:'067193145671',
        customerId:233255020102,
        transactionType:"Huawei Router",
        transactionDate:"09/10/2021",
        status:"Successful",
        cost:250
    },
    {
        id:6,
        payment:'Mobile Money',
        transactionId:'007193145671',
        customerId:233255020102,
        transactionType:"Unlimited Day/Night Bundle",
        transactionDate:"09/10/2021",
        status:"Pending",
        cost:300
    },
    {
        id:8,
        payment:'Cash',
        transactionId:'007193145671',
        customerId:233255020102,
        transactionType:"Huawei Mi-Fi",
        transactionDate:"09/10/2021",
        status:"Successful",
        cost:250
    },
    {
        id:9,
        payment:'Cash',
        transactionId:'007193145671',
        customerId:233255020102,
        transactionType:"Huawei Mi-Fi",
        transactionDate:"09/10/2021",
        status:"Successful",
        cost:250
    },
    {
        id:10,
        payment:'Cash',
        transactionId:'007193145671',
        customerId:233255020102,
        transactionType:"Huawei Mi-Fi",
        transactionDate:"09/10/2021",
        status:"Successful",
        cost:250
    },
    {
        id:11,
        payment:'Cash',
        transactionId:'007193145671',
        customerId:233255020102,
        transactionType:"Huawei Mi-Fi",
        transactionDate:"09/10/2021",
        status:"Successful",
        cost:250
    },
    {
        id:12,
        payment:'Cash',
        transactionId:'007193145671',
        customerId:233255020102,
        transactionType:"Huawei Mi-Fi",
        transactionDate:"09/10/2021",
        status:"Successful",
        cost:250
    },
    {
        id:13,
        payment:'Cash',
        transactionId:'007193145671',
        customerId:233255020102,
        transactionType:"Huawei Mi-Fi",
        transactionDate:"09/10/2021",
        status:"Successful",
        cost:250
    },
    {
        id:14,
        payment:'Cash',
        transactionId:'007193145671',
        customerId:233255020102,
        transactionType:"Huawei Mi-Fi",
        transactionDate:"09/10/2021",
        status:"Successful",
        cost:250
    },

    {
        id:15,
        payment:'Cash',
        transactionId:'007193145671',
        customerId:233255020102,
        transactionType:"Huawei Mi-Fi",
        transactionDate:"09/10/2021",
        status:"Successful",
        cost:250
    },
    {
        id:16,
        payment:'Cash',
        transactionId:'007193145671',
        customerId:233255020102,
        transactionType:"Huawei Mi-Fi",
        transactionDate:"09/10/2021",
        status:"Successful",
        cost:250
    },
    {
        id:17,
        payment:'Cash',
        transactionId:'007193145671',
        customerId:233255020102,
        transactionType:"Huawei Mi-Fi",
        transactionDate:"09/10/2021",
        status:"Successful",
        cost:250
    },
    {
        id:18,
        payment:'Cash',
        transactionId:'007193145671',
        customerId:233255020102,
        transactionType:"Huawei Mi-Fi",
        transactionDate:"09/10/2021",
        status:"Successful",
        cost:250
    },
    {
        id:19,
        payment:'Cash',
        transactionId:'007193145671',
        customerId:233255020102,
        transactionType:"Huawei Mi-Fi",
        transactionDate:"09/10/2021",
        status:"Successful",
        cost:250
    },
    {
        id:20,
        payment:'Cash',
        transactionId:'007193145671',
        customerId:233255020102,
        transactionType:"Huawei Mi-Fi",
        transactionDate:"09/10/2021",
        status:"Successful",
        cost:250
    },

]

const DEVICE_TYPES=[
    {value:"surflineHuaweiMifi",label:"Surfline Huawei Mi-Fi",price:250},
    {value:"surflineHuaweiRouter",label:"Surfline Huawei Router",price:350},
    {value:"surflineOdu",label:"Surfline ODU",price:600},
]

const VOUCHER_TYPES=[
    {value:"CASH100",label:"100",price:100},
    {value:"CASH200",label:"200",price:200},
    {value:"CASH300",label:"300",price:300},
]

const TRANSACTION_TYPES=[
    {value:"device",label:"Device"},
    {value:"data",label:"Data"},
    {value:"cash",label:"Cash"},
    {value:"voucher",label:"Voucher"},
]






export const getTransactions = () => DUMMY_DATA
export const getDeviceTypes =()=> DEVICE_TYPES
export const getVoucherTypes =() =>VOUCHER_TYPES
export const getTransactionTypes = () => TRANSACTION_TYPES

