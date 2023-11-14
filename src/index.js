import React from 'react';
import ReactDOM from 'react-dom/client';

import 'styles/theme.scss';
import './index.scss';

import {createBrowserRouter, Navigate, RouterProvider} from 'react-router-dom';

//PAGINE
import ErrorPage from 'pages/errorPage/ErrorPage.tsx';

const root = ReactDOM.createRoot(document.getElementById('root'));

const pageElement = createBrowserRouter([{
    path: '/', element: <ErrorPage/>, errorElement: <ErrorPage errorCode={0}/>
    }, {
    path: '/error', element: <ErrorPage errorCode={404}/>
    }, {
    path: '*', element: <Navigate to="/error"/>
    }
])

root.render(
    <>
        <RouterProvider router={pageElement}/>
    </>
);
