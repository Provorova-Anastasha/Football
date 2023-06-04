import React from "react";
import { Table } from "antd";
import { columns } from "./constants";
import Error403 from "../Error/Error403";
import Loader from "../Loader/Loader";

import "./MatchTable.css";

const MatchTable = ({ matches, errorMessages }) => {
  if (errorMessages) {
    return <Error403 />;
  } else if (!matches.length) return <Loader />;

  const checkScore = (value) => {
    if (value === null) {
      return "--";
    } else {
      return value;
    }
  };

  const customData = matches.map((match) => {
    const { id, utcDate, homeTeam, awayTeam, status, score } = match;
    const { name: homeTeamName } = homeTeam;
    const { name: awayTeamName } = awayTeam;

    const utcDateTime = new Date(utcDate);
    const localDate = new Date(
      utcDateTime.getTime() - utcDateTime.getTimezoneOffset() * 60 * 1000
    );
    const localTime = localDate.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    const scoreTeam = `(${checkScore(score.fullTime.homeTeam)} : ${checkScore(
      score.fullTime.awayTeam
    )})`;
    const extraScore = `(${checkScore(score.extraTime.homeTeam)} : ${checkScore(
      score.extraTime.awayTeam
    )})`;
    const penalties = `(${checkScore(score.penalties.homeTeam)} : ${checkScore(
      score.penalties.awayTeam
    )})`;

    return {
      key: id,
      date: new Date(utcDate).toLocaleDateString(),
      time: localTime,
      tags: [status],
      teams: `${homeTeamName} - ${awayTeamName}`,
      score: `${scoreTeam}, ${extraScore}, ${penalties}`,
    };
  });

  return <Table columns={columns} dataSource={customData} />;
};

export default MatchTable;
