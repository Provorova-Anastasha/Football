import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import CompetitionCalendar from './pages/CompetitionCalendar/CompetitionCalendar';
import ErrorPage from './pages/ErrorPage';
import './index.css';



function App() {
  const router = createBrowserRouter ([
        {
          path: '/',
          element: <CompetitionCalendar />,
          errorElement: <ErrorPage />
        },
      
   ]);
   return <RouterProvider router={router} />;
}
export default App;

