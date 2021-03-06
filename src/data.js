
const DUMMY_DATA = [
    {
        id: 1,
        payment:'Mobile Money',
        transactionId:'00012345671',
        customerId:"233255983123",
        transactionType:"1.6GB Bundle",
        transactionDate:"09/09/2021",
        qty:1,
        agentId:"test1",
        status:"Successful",
        cost:10
    },
    {
        id:2,
        payment:'Mobile Money',
        transactionId:'000123145671',
        customerId:"233255120102",
        transactionType:"7GB Bundle",
        transactionDate:"09/09/2021",
        qty:1,
        agentId:"test6",
        status:"Failed",
        cost:40
    },
    {
        id:3,
        payment:'Cash',
        transactionId:'000193145671',
        customerId:"233255820102",
        transactionType:"5GHC Voucher",
        qty:2,
        agentId:"test3",
        transactionDate:"09/09/2021",
        status:"Successful",
        cost:10
    },
    {
        id:4,
        payment:'Cash',
        transactionId:'007193145671',
        customerId:"233255001102",
        transactionType:"Huawei Mi-Fi",
        transactionDate:"09/10/2021",
        qty:1,
        agentId:"test6",
        status:"Successful",
        cost:250
    },
    {
        id:5,
        payment:'Cash',
        transactionId:'067193145671',
        customerId:"233255110102",
        transactionType:"Huawei Router",
        transactionDate:"09/10/2021",
        qty:1,
        agentId:"test4",
        status:"Successful",
        cost:350
    },
    {
        id:6,
        payment:'Mobile Money',
        transactionId:'007193145671',
        customerId:"233255920102",
        transactionType:"Unlimited Day/Night Bundle",
        transactionDate:"09/10/2021",
        qty:1,
        agentId:"test5",
        status:"Pending",
        cost:300
    },
    {
        id:8,
        payment:'Cash',
        transactionId:'007193145671',
        customerId:"233255020109",
        transactionType:"Huawei Mi-Fi",
        qty:2,
        agentId:"test1",
        transactionDate:"09/10/2021",
        status:"Successful",
        cost:500
    },
    {
        id:9,
        payment:'Cash',
        transactionId:'007193145671',
        customerId:"233255020102",
        transactionType:"Huawei Mi-Fi",
        transactionDate:"09/10/2021",
        qty:1,
        agentId:"test1",
        status:"Successful",
        cost:250
    },
    {
        id:10,
        payment:'Cash',
        transactionId:'007193145671',
        customerId:"233255020102",
        transactionType:"Huawei Mi-Fi",
        transactionDate:"09/10/2021",
        qty:1,
        agentId:"test5",
        status:"Successful",
        cost:250
    },
    {
        id:11,
        payment:'Cash',
        transactionId:'007193145671',
        customerId:"233255020102",
        transactionType:"Huawei Mi-Fi",
        transactionDate:"09/10/2021",
        qty:1,
        agentId:"test4",
        status:"Successful",
        cost:250
    },
    {
        id:12,
        payment:'Cash',
        transactionId:'007193145671',
        customerId:"233255029102",
        transactionType:"Huawei Mi-Fi",
        transactionDate:"09/10/2021",
        qty:1,
        agentId:"test4",
        status:"Successful",
        cost:250
    },
    {
        id:13,
        payment:'Cash',
        transactionId:'007193145671',
        customerId:"233255020132",
        transactionType:"Huawei Mi-Fi",
        transactionDate:"09/10/2021",
        qty:3,
        agentId:"test2",
        status:"Successful",
        cost:750
    },
    {
        id:14,
        payment:'Cash',
        transactionId:'007193145671',
        customerId:"233255024102",
        transactionType:"Huawei Mi-Fi",
        transactionDate:"09/10/2021",
        qty:1,
        agentId:"test3",
        status:"Successful",
        cost:250
    },

    {
        id:15,
        payment:'Cash',
        transactionId:'007193145671',
        customerId:"233255020102",
        transactionType:"Huawei Mi-Fi",
        transactionDate:"09/10/2021",
        status:"Successful",
        qty:1,
        agentId:"test5",
        cost:250
    },
    {
        id:16,
        payment:'Cash',
        transactionId:'007193145671',
        customerId:"233255020102",
        transactionType:"Huawei Mi-Fi",
        transactionDate:"09/10/2021",
        qty:1,
        agentId:"test1",
        status:"Successful",
        cost:250
    },
    {
        id:17,
        payment:'Cash',
        transactionId:'007193145671',
        customerId:"233255320102",
        transactionType:"Huawei Mi-Fi",
        transactionDate:"09/10/2021",
        qty:1,
        agentId:"test1",
        status:"Successful",
        cost:250
    },
    {
        id:18,
        payment:'Cash',
        transactionId:'007193145671',
        customerId:"233255120106",
        transactionType:"Huawei Mi-Fi",
        qty:1,
        agentId:"test1",
        transactionDate:"09/10/2021",
        status:"Successful",
        cost:250
    },
    {
        id:19,
        payment:'Cash',
        transactionId:'007193145671',
        customerId:"233255020102",
        transactionType:"7GB Bundle",
        transactionDate:"09/10/2021",
        qty:1,
        agentId:"test4",
        status:"Successful",
        cost:40
    },
    {
        id:20,
        payment:'Cash',
        transactionId:'007193145671',
        customerId:"233255020102",
        transactionType:"Huawei Mi-Fi",
        qty:1,
        agentId:"test1",
        transactionDate:"09/10/2021",
        status:"Successful",
        cost:250
    },

]

const DEVICE_TYPES=[
    {value:"HuaweiMifi",label:"Huawei Mi-Fi",price:250},
    {value:"HuaweiRouter",label:"Huawei Router",price:350},
    {value:"Odu",label:"Air Fiber",price:600},
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

const DATA_BUNDLES = {
    'All Weather':[
        {bundleName: "1.6GB",cost:10,bundleId:"1.6gb"},
        {bundleName: "3.2GB",cost:20,bundleId:"3.2gb"},
        {bundleName: "7GB",cost:35,bundleId:"7gb"},
        {bundleName: "12GB",cost:60,bundleId:"12gb"},
        {bundleName: "30GB",cost:100,bundleId:"30gb"},
    ],
    "Unlimited":[
        {bundleName: "Unlimited Day/Night",cost:300,bundleId:"ulall"},
        {bundleName: "Unlimited Night",cost:180,bundleId:"uln"},
    ],
    "AlwaysON Business":[
        {bundleName: "AlwaysON Standard",cost:400,bundleId:"ulst"},
        {bundleName: "AlwaysON Super",cost:550,bundleId:"ulsu"},
        {bundleName: "AlwaysON Ultra",cost:600,bundleId:"ulul"},

    ]
}

const DATA_BUNDLES2 = {
    'Pay Weekly':[
        {bundleName: "8GB",cost:10,bundleId:"1.6gb"},
        {bundleName: "10GB",cost:20,bundleId:"3.2gb"},
        {bundleName: "18GB",cost:35,bundleId:"7gb"},
          ],

}

const USERS =[
    {
        id:1,
        fullName:'Kofi Mai',
        username:'test6',
        status:'ACTIVE',
        email:"test@test.com",
        phoneContact:"233249113451",
        role:"Cashier",
        dateAdded:"09/10/2021",
    },
    {
        id:2,
        fullName:'Andy Mark',
        username:'test5',
        status:'ACTIVE',
        email:"test@test.com",
        phoneContact:"233249113451",
        role:"Cashier",
        dateAdded:"09/10/2021",
    },
    {
        id:3,
        fullName:'Yaw Attah',
        username:'test4',
        status:'BLOCKED',
        email:"test@test.com",
        phoneContact:"233249113451",
        role:"Cashier",
        dateAdded:"09/10/2021",
    },
    {
        id:4,
        fullName:'Andy Mark',
        username:'test3',
        status:'ACTIVE',
        email:"test@test.com",
        phoneContact:"233249113451",
        role:"Cashier",
        dateAdded:"09/10/2021",
    },
    {
        id:5,
        fullName:'Enoch King',
        username:'test2',
        status:'CREATED',
        email:"test@test.com",
        phoneContact:"233249113451",
        role:"Cashier",
        dateAdded:"09/10/2021",
    },
    {
        id:6,
        fullName:'Yaa Araba',
        username:'test1',
        email:"test@test.com",
        phoneContact:"233249113451",
        status:'ACTIVE',
        role:"Manager",
        dateAdded:"09/10/2021",
    },
]



const ITEMS =[
    {
        id:1,
        itemId:"00000000106",
        itemName:'Huawei Mi-Fi',
        stockQuantity:30,
        price:250,
    },
    {
        id:2,
        itemId:"00000000102",
        itemName:'Huawei Wireless Router',
        stockQuantity:9,
        price:350,
    },
    {
        id:3,
        itemId:"00000000103",
        itemName:'Alcatel Mi-Fi',
        stockQuantity:3,
        price:230,
    },
    {
        id:4,
        itemId:"00000000104",
        itemName:'D-link Router',
        stockQuantity:0,
        price:300,
    },
    {
        id:5,
        itemId:"00000000101",
        itemName:'50GHC_Voucher',
        stockQuantity:30,
        price:50,
    },
    {
        id:6,
        itemId:"00000000107",
        itemName:'100GHC_Voucher',
        stockQuantity:4,
        price:100,
    },
]


const ITEMS_IN =[
    {
        itemId:"00000000106",
        itemName:'Huawei Mi-Fi',
        stockQuantity:30,
        dateIssued:"24/09/2021"
    },
    {

        itemId:"00000000102",
        itemName:'HTC Wireless Router',
        stockQuantity:9,
        dateIssued:"24/09/2021"
    },
    {
        itemId:"00000000103",
        itemName:'Alcatel Mi-Fi',
        stockQuantity:50,
        dateIssued:"24/09/2021"
    },
    {

        itemId:"00000000104",
        itemName:'D-link Router',
        stockQuantity:10,
        dateIssued:"24/09/2021"
    },
    {

        itemId:"00000000101",
        itemName:'50GHC_Voucher',
        stockQuantity:30,
        dateIssued:"24/09/2021"
    },
    {

        itemId:"00000000107",
        itemName:'100GHC_Voucher',
        stockQuantity:20,
        dateIssued:"24/09/2021"
    },

]



export const getItems = () => ITEMS
export const getItemsIn = () => ITEMS_IN

export const getTransactions = () => DUMMY_DATA
export const getDeviceTypes =()=> DEVICE_TYPES
export const getVoucherTypes =() =>VOUCHER_TYPES
export const getTransactionTypes = () => TRANSACTION_TYPES
export const getUsers = () =>USERS

export const getBundles = (msisdn) => {
    if (msisdn === '233255030602'){
        return DATA_BUNDLES2
    }
    return  DATA_BUNDLES

}

