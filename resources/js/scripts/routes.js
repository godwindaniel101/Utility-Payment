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
const AdminVendorsNumber = resolve => require(['../pages/Admin/Vendors/Number'], resolve);
const AdminReportView = resolve => require(['../pages/Admin/Report/View'], resolve);
const AdminReportIndex = resolve => require(['../pages/Admin/Report/Index'], resolve);
const AdminCustomerView = resolve => require(['../pages/Admin/Customer/View'], resolve);
const AdminCustomerIndex = resolve => require(['../pages/Admin/Customer/Index'], resolve);
const AdminCustomerIssueBill = resolve => require(['../pages/Admin/Customer/IssueBill'], resolve);
// end admin routes


// start Customer routes
const CustomerView = resolve => require(['../pages/Customer/View'], resolve);
const CustomerIndex = resolve => require(['../pages/Customer/Index'], resolve);
const CustomerTopUpView = resolve => require(['../pages/Customer/TopUp/View'], resolve);
const CustomerTopUpIndex = resolve => require(['../pages/Customer/TopUp/Index'], resolve);
const CustomerTopUpIndexData = resolve => require(['../pages/Customer/TopUp/IndexData'], resolve);
const CustomerTopUpPay = resolve => require(['../pages/Customer/TopUp/Pay'], resolve);
const CustomerPayment = resolve => require(['../pages/Customer/Payment'], resolve);
const CustomerComplainView = resolve => require(['../pages/Customer/Complain/View'], resolve);
const CustomerComplainIndex = resolve => require(['../pages/Customer/Complain/Index'], resolve);
const CustomerComplainAdd = resolve => require(['../pages/Customer/Complain/Add'], resolve);
const CustomerReportView = resolve => require(['../pages/Customer/Report/View'], resolve);
const CustomerReportIndex = resolve => require(['../pages/Customer/Report/Index'], resolve);
const CustomerBillView = resolve => require(['../pages/Customer/Bill/View'], resolve);
const CustomerBillIndex = resolve => require(['../pages/Customer/Bill/Index'], resolve);
const CustomerBillPay = resolve => require(['../pages/Customer/Bill/Pay'], resolve);
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
                    {
                        path: 'report', component: AdminReportView,
                        children: [
                            { path: '', component: AdminReportIndex },
                        ]
                    },
                    {
                        path: 'customer', component: AdminCustomerView,
                        children: [
                            { path: '', component: AdminCustomerIndex },
                            {path:'issue_bill/:id', component: AdminCustomerIssueBill },
                        ]
                    },
                    {
                        path: 'vendors', component: AdminVendors,
                        children: [
                            { path: '', component: AdminVendorsIndex },
                            { path: 'add', component: AdminVendorsAdd },
                            { path: 'edit/:id', component: AdminVendorsAdd },
                            { path: 'detail/:id', component: AdminVendorsDetail },
                            { path: 'detail/:id/bill', component: AdminVendorsBill },
                            { path: 'detail/:id/number', component: AdminVendorsNumber },
                        ]
                    },
                ]
            },
            {
                path: '/customer',
                component: CustomerView,
                children: [
                    { path: '', component: CustomerIndex },
                    {
                        path: 'top-up', component: CustomerTopUpView,
                        children: [
                            { path: '', component: CustomerTopUpIndex },
                            { path: ':id', component: CustomerTopUpIndexData },
                            { path: 'pay/:id', component: CustomerTopUpPay },
                        ]
                    },
                    {
                        path: 'complain', component: CustomerComplainView,
                        children: [
                            { path: '', component: CustomerComplainIndex },
                            { path: 'add', component: CustomerComplainAdd },
                        ]
                    },
                    {
                        path: 'report', component: CustomerReportView,
                        children: [
                            { path: '', component: CustomerReportIndex },
                        ]
                    },
                    {
                        path: 'bill', component: CustomerBillView,
                        children: [
                            { path: '', component: CustomerBillIndex },
                            { path: ':id', component: CustomerTopUpIndex },
                            { path: 'pay/:id', component: CustomerBillPay },
                        ]
                    },
                    { path: 'payment', component: CustomerPayment },
                ]
            }

        ]
    }
]