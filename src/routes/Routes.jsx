import {createBrowserRouter} from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NewsDetails from "../pages/NewsDetails";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
        {
            path:"/",
            element:<Home></Home>,
            loader:()=>fetch('news.json')
        },
        {
         path:"/news/:id",
          loader:()=>fetch('news.json'),
          element:<NewsDetails></NewsDetails>
        },
        {
          path:"/login",
          element:<Login></Login>
        },
        {
          path:"/Register",
          element:<Register></Register>
        }
    ]
  },
]);
export default router;