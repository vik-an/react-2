import "./App.css";
import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ROUTES } from "./routes/consts";
import RootLayout from "./components/layout/RootLayout";
import Home from "./components/pages/Home";
import AboutUs from "./components/pages/aboutUs";
import Services from "./components/pages/services";
import Login from "./components/pages/Login";
import SearchCategory from "./components/pages/searchCategory";
import RegisterForm from "./components/pages/register";
import CategoryPage from "./components/pages/CategoryPage";
//import ErrorPage from "./components/pages/ErrorPage";

const router = createBrowserRouter([
  {
    element: <RootLayout />, // bus atidaromas visuose puslapiuose
    //errorElement: <ErrorPage />, //išmes klaidą jei tokia bus
    children: [
      {
        path: ROUTES.HOME,
        element: <Home />,
      },
      {
        path: ROUTES.ABOUT_US,
        element: <AboutUs />,
      },
      {
        path: ROUTES.SERVICES,
        element: <Services />,
      },
      {
        path: ROUTES.LOGIN,
        element: <Login />,
      },
      {
        path: ROUTES.SEARCH_CATEGORY,
        element: <SearchCategory />,
      },
      {
        path: ROUTES.REGISTER,
        element: <RegisterForm />,
      },
      {
        path: ROUTES.CATEGORY_PAGE,
        element: <CategoryPage />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

//kokie puslapiai bus atidaromi pasirinkus tam tikra route
