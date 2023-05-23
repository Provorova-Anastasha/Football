import React from 'react';
import './CardTeamsStyle.css';
import { Link } from 'react-router-dom';

const CardTeams = ({ name, crestUrl, id }) => {
  const teamLink = `/teams/${id}/matches`;

    return (
    <div className='Cardteams'>
      <Link to={teamLink} className="CardTeamsButton">
      <p className='cardTitle'>{name}</p>
      <img src={crestUrl} alt='img' widht="60px" height="70px"/>
      </Link>
    </div>
  );
};
export default CardTeams

