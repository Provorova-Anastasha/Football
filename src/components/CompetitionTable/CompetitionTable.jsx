import React from "react";
import { Table, Tag } from "antd";
import Error403 from "../Error/Error403";

import "./CompetitionTableStyle.css";

const columns = [
  {
    title: "Дата",
    dataIndex: "date",
    key: "date",
    render: (text) => <p>{text}</p>,
  },
  {
    title: "Время",
    dataIndex: "time",
    key: "time",
  },
  {
    title: "Статус",
    key: "tags",
    dataIndex: "tags",
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "red" : "red";
          if (tag === "SCHEDULED") {
            color = "blue";
          }

          return (
            <Tag color={color} key={tag}>
              {statusMatches[tag].toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Команды",
    dataIndex: "teams",
    key: "teams",
  },
  {
    title: "Счет",
    dataIndex: "score",
    key: "score",
  },
];

const statusMatches = {
  SCHEDULED: "Запланирован",
  LIVE: "В прямом эфире",
  IN_PLAY: "В игре",
  PAUSED: "Пауза",
  FINISHED: "Завершён",
  POSTPONED: "Отложен",
  SUSPENDED: "Приостановлен",
  CANCELED: "Отменён",
};
const CompetitionTable = ({ matchesLeague }) => {
  if (!matchesLeague.length) return <Error403 />;

  const checkScore = (value) => {
    if (value === null) {
      return "--";
    } else {
      return value;
    }
  };

  const customData = matchesLeague.map((match) => {
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

  return <div className="table">
  <Table columns={columns} dataSource={customData} />
  </div>
};

export default CompetitionTable;