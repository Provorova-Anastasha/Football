import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiCreate } from "../../api/api";
import Header from "../../components/Header";
import MatchTable from "../../components/MatchTable/MatchTable";
import Footer from "../../components/Footer";
import BreadCrumbComponent from "../../components/BreadCrumbComponent"

import "./TeamCalendarStyle.css";


const TeamCalendar = () => {
  const [matchesTeams, setMatchesTeams] = useState([]);
  const [errorMessages, setErrorMessages] = useState(null)

  const { id } = useParams();

  useEffect(() => {
    async function fetchMatches() {
      try {
        const matches = await apiCreate.get(`/teams/${id}/matches`);
        setMatchesTeams(matches.data.matches);
      } catch (error) {
        setErrorMessages(error) 
        console.error(error);
      }
    }
    fetchMatches();
  }, [id]);

  return (
    <>
      <Header />
      <BreadCrumbComponent apiEndpoint="teams" title="Команды" />
      <p className="textMatches">Матчи</p>
      <MatchTable matches={matchesTeams} errorMessages={errorMessages}/>
      <Footer />
    </>
  );
};
export default TeamCalendar;