import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './TeamsCentreStyle.css';
import CardTeams from '../CardTeams';

const apiCreate = axios.create({
    baseURL: 'https://api.football-data.org/v2/teams',
    headers: { 'X-Auth-Token': 'b8222ee5b9614c0a903ee097df792fbc' },
  });
  const TeamsCentre = () => {
    const [teams, setTeams] = useState([]);
    useEffect(() => {
        async function fetchAllTeams() {
          try {
            const allTeams = await apiCreate.get();
            setTeams(allTeams.data.teams);
          } catch (error) {
            console.error();
          }
        }
        fetchAllTeams();
      }, []);
      return teams?.length ? (
        <div className='Teams'>
          {teams.map(({id,name,crestUrl}) => {
                    return (
              <CardTeams
                key={id}
                name={name}
                crestUrl={crestUrl}
              />
            );
          })}
        </div>
        ) : (
            <p className = "loading">Loading...</p>
          );
        }
    export default TeamsCentre
