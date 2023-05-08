import React from 'react';
import './TeamsCentreStyle.css';
import CardTeams from '../CardTeams';

const TeamsCentre = ({teams}) => {
      return (
        <div className='teams'>
          {teams.map(team => (
         <CardTeams
                key={team.id}
                name={team.name}
                crestUrl={team.crestUrl}
              />
           ))}
        </div>
        );
        }
    export default TeamsCentre
