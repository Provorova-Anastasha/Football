import React from "react";
import "./LeagueCentreStyle.css";
import CardCompetitions from "../CardCompetitions";

const LeagueCentre = ({ ligs }) => {
  return (
    <div className="competitions">
      {ligs.map(({ id, name, area }) => (
        <CardCompetitions id={id} key={id} name={name} area={area.name} />
      ))}
    </div>
  );
};
export default LeagueCentre;
