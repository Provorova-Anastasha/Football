import React from "react";
import "./CardCompetitionsStyle.css";
import { Link } from "react-router-dom";

const CardCompetitions = ({ name, area, id }) => {
  const competitionLink = `/competitions/${id}/matches`;
  return (
    <div className="cardcompetitions">
      <Link to={competitionLink} className="CardCompetitionsButton">
        <h1 className="cards">{name}</h1>
        <h2 className="cards">{area}</h2>
      </Link>
    </div>
  );
};

export default CardCompetitions;
