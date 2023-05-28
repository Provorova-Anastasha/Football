import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiCreate } from "../../api/api";
import Header from "../../components/Header";
import CompetitionTable from "../../components/CompetitionTable";
import Footer from "../../components/Footer";
import BreadCrumbComponent from "../../components/BreadCrumbComponent";

import "./CompetitionCalendarStyle.css";

const CompetitionCalendar = () => {
  const [matchesLeague, setMatchesLeague] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    async function fetchMatches() {
      try {
        const matches = await apiCreate.get(`/competitions/${id}/matches`);
        setMatchesLeague(matches.data.matches);
      } catch (error) {
        console.error();
        console.log ("ОШИБКА")
      }
    }
    fetchMatches();
  }, [id]);

  return (
    <React.Fragment>
      <Header />
      <BreadCrumbComponent />
      <p className="textMatches">Матчи</p>
      <CompetitionTable matchesLeague={matchesLeague} />
      <Footer />
    </React.Fragment>
  );
};
export default CompetitionCalendar;