import Main from "../layout/Main";
import Registisilon from "../layout/Registisilon";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    },
]);
export default router;