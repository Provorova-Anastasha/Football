import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import League from './pages/League';
import Teams from './pages/Teams';
import ErrorPage from './pages/ErrorPage';
import TeamCalendar from './pages/TeamCalendar';
import CompetitionCalendar from './pages/CompetitionCalendar'
import './index.css';



function App() {
  const router = createBrowserRouter ([
       {
          path: '/',
          element: <League />,
          errorElement: <ErrorPage />
        },
        {
          path: '/teams',
          element: <Teams />,
          },
          {
            path: `/teams/:id/matches`,
              element: <TeamCalendar />,
          },
          {
            path: `/competitions/:id/matches`,
            element: <CompetitionCalendar />,
          },
   ]);
   return <RouterProvider router={router} />;
}
export default App;

