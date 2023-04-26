import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import League from './pages/League';
import ErrorPage from './pages/ErrorPage';
import './index.css';



function App() {
  const router = createBrowserRouter ([
        {
          path: '/',
          element: <League />,
          errorElement: <ErrorPage />
        }
   ]);
   return <RouterProvider router={router} />;
}
export default App;
