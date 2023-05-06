import React from 'react';
import './CardTeamsStyle.css';
import { Link } from 'react-router-dom';

const CardTeams = ({ name, crestUrl }) => {
  console.log(crestUrl)
  return (
    <div className='Cardteams'>
      <Link to  ='/' className="CardTeamsButton">
      <p className='cardTitle'>{name}</p>
      <img src={crestUrl} alt='img' widht="60px" height="70px"/>
      </Link>
    </div>
  );
};
export default CardTeams

