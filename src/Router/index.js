import { Router, createBrowserRouter } from "react-router-dom";
import { Header } from "../Component/Header";
import HomePage from "../Page/Hompage";
import AdminPage from "../Page/Adminpage";
const Routers = createBrowserRouter([
    {
        path:"/",
        element: <Header/>,
        children: [
            {
            path:"/portfolio",
            element: <HomePage/>
            }
        ],
    },
])

export default Routers;