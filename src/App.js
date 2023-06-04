import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import League from "./pages/League";
import Teams from "./pages/Teams";
import Error from "./components/Error";
import TeamCalendar from "./pages/TeamCalendar";
import CompetitionCalendar from "./pages/CompetitionCalendar";
import "./index.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <League />,
      errorElement: <Error />,
    },
    {
      path: "/teams",
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
