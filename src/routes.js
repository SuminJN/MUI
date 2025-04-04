// Material Dashboard 2 React layouts
import Dashboard from "layouts/dashboard";
import Tables from "layouts/tables";
import Billing from "layouts/billing";
import Notifications from "layouts/notifications";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";

// @mui icons
import Icon from "@mui/material/Icon";
import ShareHistory from "./layouts/shareHistory";
import ShareRequest from "./layouts/shareRequest";

const routes = [
  {
    type: "collapse",
    name: "Home",
    key: "home",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/home",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "Share History",
    key: "share-history",
    icon: <Icon fontSize="small">volunteer_activism_icon</Icon>,
    route: "/share-history",
    component: <ShareHistory />,
  },
  {
    type: "collapse",
    name: "Share Request",
    key: "share-request",
    icon: <Icon fontSize="small">redeem_icon</Icon>,
    route: "/share-request",
    component: <ShareRequest />,
  },
  // {
  //   type: "collapse",
  //   name: "Tables",
  //   key: "tables",
  //   icon: <Icon fontSize="small">table_view</Icon>,
  //   route: "/tables",
  //   component: <Tables />,
  // },
  // {
  //   type: "collapse",
  //   name: "Billing",
  //   key: "billing",
  //   icon: <Icon fontSize="small">receipt_long</Icon>,
  //   route: "/billing",
  //   component: <Billing />,
  // },
  // {
  //   type: "collapse",
  //   name: "Notifications",
  //   key: "notifications",
  //   icon: <Icon fontSize="small">notifications</Icon>,
  //   route: "/notifications",
  //   component: <Notifications />,
  // },
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/profile",
    component: <Profile />,
  },
  // {
  //   type: "collapse",
  //   name: "Sign In",
  //   key: "sign-in",
  //   icon: <Icon fontSize="small">login</Icon>,
  //   route: "/authentication/sign-in",
  //   component: <SignIn />,
  // },
  // {
  //   type: "collapse",
  //   name: "Sign Up",
  //   key: "signup",
  //   icon: <Icon fontSize="small">assignment</Icon>,
  //   route: "/signup",
  //   component: <SignUp />,
  // },
];

export default routes;
