const Index = resolve => require(['../pages/Index'], resolve);

// start authentication routes
const Register = resolve => require(['../pages/Authentication/Register'], resolve);
const Login = resolve => require(['../pages/Authentication/Login'], resolve);
// end authentication routes

// start admin routes
const AdminView = resolve => require(['../pages/Admin/View'], resolve);
const AdminIndex = resolve => require(['../pages/Admin/Index'], resolve);
const AdminComplains = resolve => require(['../pages/Admin/Complains'], resolve);
const AdminPayments = resolve => require(['../pages/Admin/Payments'], resolve);


const AdminVendors = resolve => require(['../pages/Admin/Vendors/View'], resolve);
const AdminVendorsIndex = resolve => require(['../pages/Admin/Vendors/Index'], resolve);
const AdminVendorsAdd = resolve => require(['../pages/Admin/Vendors/Add'], resolve);
const AdminVendorsDetail = resolve => require(['../pages/Admin/Vendors/Detail'], resolve);
const AdminVendorsBill = resolve => require(['../pages/Admin/Vendors/Bill'], resolve);

const AdminCustomers = resolve => require(['../pages/Admin/Customers'], resolve);
// end admin routes


// start Customer routes
const CustomerView = resolve => require(['../pages/Customer/View'], resolve);
const CustomerIndex = resolve => require(['../pages/Customer/Index'], resolve);
const CustomerTopUp = resolve => require(['../pages/Customer/TopUp'], resolve);
const CustomerPayNow = resolve => require(['../pages/Customer/PayNow'], resolve);
const CustomerPayment = resolve => require(['../pages/Customer/Payment'], resolve);
const CustomerTopUpData = resolve => require(['../pages/Customer/TopUpData'], resolve);
const CustomerComplain = resolve => require(['../pages/Customer/Complain'], resolve);
const CustomerComplainAdd = resolve => require(['../pages/Customer/AddComplain'], resolve);
// end Customer routes



//sub pages
const Unauthorized = resolve => require(['../pages/Sub/Unauthorized'], resolve);
const Home = resolve => require(['../pages/Sub/Home'], resolve);
const Default = resolve => require(['../pages/Sub/Default'], resolve);
export const routes = [
    {
        path: '/',
        component: Index,
        children: [
            { path: '', component: Home },
            { path: '/default', component: Default },
            { path: '/register', component: Register, },
            { path: '/unauthorized', component: Unauthorized, },
            { path: '/login', component: Login, },
            {
                path: '/admin',
                component: AdminView,
                children: [
                    { path: '', component: AdminIndex },
                    { path: 'complains', component: AdminComplains },
                    { path: 'payments', component: AdminPayments },
                    { path: 'vendors', component: AdminVendors,
                    children: [
                        { path: '', component: AdminVendorsIndex },
                        { path: 'add', component: AdminVendorsAdd },
                        { path: 'edit/:id', component: AdminVendorsAdd },
                        { path: 'detail/:id', component: AdminVendorsDetail },
                        { path: 'detail/:id/bill', component: AdminVendorsBill },
                    ] },
                ]
            },
            {
                path: '/customer',
                component: CustomerView,
                children: [
                    { path: '', component: CustomerIndex },
                    { path: 'top-up', component: CustomerTopUp },
                    { path: 'top-up/:id', component: CustomerTopUpData },
                    { path: 'pay-now/:id', component: CustomerPayNow },
                    { path: 'payment', component: CustomerPayment },
                    { path: 'complain', component: CustomerComplain },
                    { path: 'complain/add', component: CustomerComplainAdd },
                ]
            }

        ]
    }
]