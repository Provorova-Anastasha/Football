import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiCreate } from "../../api/api";
import Header from "../../components/Header";
import TeamTable from "../../components/TeamTable";
import Footer from "../../components/Footer";
import BreadCrumbComponent from "../../components/BreadCrumpComponent";

import "./TeamCalendarStyle.css";

const TeamCalendar = () => {
  const [matchesTeams, setMatchesTeams] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    async function fetchMatches() {
      try {
        const matches = await apiCreate.get(`/teams/${id}/matches`);
        setMatchesTeams(matches.data.matches);
      } catch (error) {
        console.error();
      }
    }
    fetchMatches();
  }, [id]);

  return (
    <React.Fragment>
      <Header />
      <BreadCrumbComponent />
      <p className="textMatches">Матчи</p>
      <TeamTable matchesTeams={matchesTeams} />
      <Footer />
    </React.Fragment>
  );
};
export default TeamCalendar;