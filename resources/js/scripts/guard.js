import Vue from "vue";
import { routes } from "./routes";
import VueRouter from "vue-router";
import VueProgressBar from "vue-progressbar";

var progress_bar = new Vue();

//progress bar set up
const options = {
    color: "#C98144",
    failedColor: "#874b4b",
    thickness: "2px",
    transition: { speed: "1s", opacity: "0.6s", termination: 300 },
    autoRevert: true,
    location: "top",
    inverse: false
};

Vue.use(VueProgressBar, options);
//end of set up for progress bar

export const router = new VueRouter({
    routes,
    mode: "history"
});
router.beforeEach((to, from, next) => {
    progress_bar.$Progress.start();
    // initate progress bar
    var isPath = to.path;

    var isAdmin = isPath.includes("admin");
    //check if path is admin
    var isUser = isPath.includes("customer");
    //check if path is user
    if (isAdmin || isUser) {
        // check if route is an authenticated route
        var user_type = localStorage.getItem("user_type");
        // get user type
        var loggedInUser = localStorage.getItem("is_logged_in");
        // get user status
        if (loggedInUser == null || !loggedInUser) {
            // check if user is logged in or not
            router.push({ path: "/login" });
        } else {
            if (user_type == "") {
                // second check to validate user type
                router.push("/oops");
            } else {
                if (isAdmin && user_type == "admin") {
                    // ensure admin is logged into admin route
                    next();
                } else if (isUser && user_type == "customer") {
                    // ensure user is logged into user route
                    next();
                } else {
                    router.push("/unauthorized");
                    // unauthorized page
                }
            }
        }
    } else {
        next();
    }
});
router.afterEach(() => {
    progress_bar.$Progress.finish();
});
