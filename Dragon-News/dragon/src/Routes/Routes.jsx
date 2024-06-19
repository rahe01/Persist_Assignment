import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import News from "../Pages/News/News";
import ErrorPage from "../Pages/ErrorPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <Home></Home>,
        loader: () => fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${import.meta.env.VITE_APIII_KEY}`)
      },
      {
        path: '/news/:id',
        element: <News></News>,
        loader: () => fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${import.meta.env.VITE_APIII_KEY}`)
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      }
    ],
  },
]);

export default router;
