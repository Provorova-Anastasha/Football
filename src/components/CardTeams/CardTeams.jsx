import React from 'react';
import './CardTeamsStyle.css';
import { Link } from 'react-router-dom';

const CardTeams = () => {
    return (
      <div className='Cardteams'>
        <Link to ='/' className="CardTeams-Button">
        <p className='team'>Название команды</p>
        </Link>
       </div>
    );
  };
export default CardTeams