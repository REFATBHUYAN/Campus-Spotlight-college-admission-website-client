import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout';
import Home from '../Pages/Home/Home';
import CollegeDetails from '../Pages/Home/CollegeDetails';

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:"/",
            element: <Home></Home>
        },
        {
            path:"/college-details/:id",
            element: <CollegeDetails></CollegeDetails>
        }
      ]
    },
  ]);

export default router;