import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './LeagueCentreStyle.css';
import CardCompetitions from '../CardCompetitions'

const apiCreate = axios.create({
    baseURL: 'https://api.football-data.org/v2/competitions',
    headers: { 'X-Auth-Token': 'b8222ee5b9614c0a903ee097df792fbc' },
  });
const LeagueCentre = () => {
    const [ligs, setLigs] = useState([]);

  useEffect(() => {
    async function fetchAllLigs() {
      try {
        const allLigs = await apiCreate.get();
        setLigs(allLigs.data.competitions);
      } catch (error) {
        console.log(error);
      }
    }
    fetchAllLigs();
  }, []);
  return ligs?.length ? (
    <div className='Competitions'>
      {ligs.map((liga) => {
        return (
          <CardCompetitions
            key={liga.id}
            name={liga.name}
            area={liga.area.name}
          />
        );
      })}
    </div>
  ) : (
    <p style={{ color: 'black' }}>Loading...</p>
  );
}
    export default LeagueCentre;
