import React from 'react';
import ReactDOM from 'react-dom/client';

import 'styles/theme.scss';
import './index.scss';

import {createBrowserRouter, RouterProvider} from 'react-router-dom';

//BORDERD
//PAGINE
import HomePage from 'pages/homePage/HomePage.tsx';
import ErrorPage from 'pages/errorPage/ErrorPage.tsx';
import AdminPanel from "./pages/adminPanel/AdminPanel";

const root = ReactDOM.createRoot(document.getElementById('root'));

const pageElement = createBrowserRouter([{
    path: '/', element: <HomePage/>, errorElement: <ErrorPage errorCode={0}/>
    }, {
    path: '/panel', element: <AdminPanel/>
    }, {
    path: '/error', element: <ErrorPage errorCode={404}/>
    }, {
    path: '*', element: <ErrorPage errorCode={404}/>
    }
])

root.render(
    <>
        <RouterProvider router={pageElement}/>
    </>
);
