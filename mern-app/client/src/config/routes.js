// Layout
import LayoutAdmin from "../layouts/LayoutAdmin";
import LayoutBasic from "../layouts/LayoutBasic";

// Admin Pages
import AdminHome from "../pages/Admin";
import AdminSignIn from "../pages/Admin/SignIn";

// Basic Pages
import Home from "../pages/Home";
import Contact from "../pages/Contact";

// Others
import Err404 from "../pages/Err404";

const routesAdmin = [
  {
    path: "/admin",
    layout: LayoutAdmin,
    component: AdminHome,
  },
  {
    path: "/admin/login",
    layout: LayoutAdmin,
    component: AdminSignIn,
  },
];

const routesBasic = [
  {
    path: "/",
    layout: LayoutBasic,
    component: Home,
  },
  {
    path: "/contact",
    layout: LayoutBasic,
    component: Contact,
  },
];

const err404 = [
  {
    path: "*",
    layout: LayoutBasic,
    component: Err404,
  },
];

const routes = [...routesAdmin, ...routesBasic, ...err404];

export default routes;
