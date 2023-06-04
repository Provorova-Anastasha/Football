import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiCreate } from "../../api/api";
import { DatePicker } from "antd";
import Header from "../../components/Header";
import MatchTable from "../../components/MatchTable/MatchTable";
import Footer from "../../components/Footer";
import BreadCrumbComponent from "../../components/BreadCrumbComponent";

import "./CompetitionCalendarStyle.css";

const { RangePicker } = DatePicker;

const CompetitionCalendar = () => {
  const [matchesLeague, setMatchesLeague] = useState([]);
  const [errorMessages, setErrorMessages] = useState(null);
  const [dates, setDates] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    async function fetchMatches() {
      const formattedDate =
        dates && dates.map((d) => d.toISOString().substr(0, 10));
      const datesQuery = dates
        ? `?dateFrom=${formattedDate[0]}&dateTo=${formattedDate[1]}`
        : "";
      try {
        const matches = await apiCreate.get(
          `/competitions/${id}/matches${datesQuery}`
        );
        setMatchesLeague(matches.data.matches);
      } catch (error) {
        setErrorMessages(error);
        console.error(error);
      }
    }
    fetchMatches();
  }, [id, dates]);

  return (
    <>
      <Header />
      <BreadCrumbComponent apiEndpoint="competitions" title="Лиги" />
      <p className="textMatches">Матчи</p>
      <RangePicker
        onCalendarChange={(v) => setDates(v)}
        placeholder={["c", "по"]}
        onCle
      />
      <MatchTable matches={matchesLeague} errorMessages={errorMessages} />
      <Footer />
    </>
  );
};
export default CompetitionCalendar;
