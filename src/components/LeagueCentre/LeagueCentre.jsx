import React from 'react';
import './LeagueCentreStyle.css';
import CardCompetitions from '../CardCompetitions'


const LeagueCentre = ({ligs}) => {
    return (
    <div className='competitions'>
      {ligs.map(liga=>(
        <CardCompetitions
        key={liga.id}
        name={liga.name}
        area={liga.area.name}
      />
      ))}
         
    </div>
  )
}
    export default LeagueCentre;
