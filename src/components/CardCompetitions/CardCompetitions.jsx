import React from 'react';
import './CardCompetitionsStyle.css';
import { Link } from 'react-router-dom';


const CardCompetitions = ({ name, area }) => {
  return (
    <div className='Cardcompetitions'>
      <Link to  ='/' className="CardCompetitions-Button">
      <h1 className='cards'>{name}</h1>
      <h2 className='cards'>{area}</h2>
      </Link>
    </div>
  );
};

export default CardCompetitions