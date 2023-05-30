import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiCreate } from "../../api/api";
import Header from "../../components/Header";
import MatchTable from "../../components/MatchTable/MatchTable";
import Footer from "../../components/Footer";
import BreadCrumbComponent from "../../components/BreadCrumbComponent";

import "./CompetitionCalendarStyle.css";

const CompetitionCalendar = () => {
  const [matchesLeague, setMatchesLeague] = useState([]);
  const [errorMessages, setErrorMessages] = useState(null)

  const { id } = useParams();

  useEffect(() => {
    async function fetchMatches() {
      try {
        const matches = await apiCreate.get(`/competitions/${id}/matches`);
        setMatchesLeague(matches.data.matches);
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
      <BreadCrumbComponent apiEndpoint="competitions" title="Лиги" />
      <p className="textMatches">Матчи</p>
      <MatchTable matches={matchesLeague} errorMessages={errorMessages}/>
      <Footer />
    </>
  );
};
export default CompetitionCalendar;