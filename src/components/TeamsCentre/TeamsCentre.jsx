import React from 'react';
import './TeamsCentreStyle.css';
import CardTeams from '../CardTeams';

const TeamsCentre = ({teams}) => {
      return (
        <div className='teams'>
          {teams.map(({id,name,crestUrl}) => (
         <CardTeams
                key={id}
                id={id}
                name={name}
                crestUrl={crestUrl}
              />
           ))}
        </div>
        );
        }
    export default TeamsCentre
