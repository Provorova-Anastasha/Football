import React, { Fragment,useEffect,useState } from 'react';
import Header from '../../components/Header';
import TeamsCentre from '../../components/TeamsCentre';
import Footer from '../../components/Footer';
import { apiCreate } from '../../api/api';
import {Pagination} from 'antd';
import './TeamsStyle.css';
import Loader from '../../components/Loader/Loader';

const MAX_TEAMSCENTRE_PER_PAGE = 6;

const Teams = () => {
  const [teams, setTeams] = useState([]);
  const [filteredTeams, setFilteredTeams] = useState([]);
  const [page, setPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");

    useEffect(() => {
      async function fetchAllTeams() {
        try {
          const allTeams = await apiCreate.get('/teams');
          setTeams(allTeams.data.teams);
          setFilteredTeams(allTeams.data.teams);
          } catch (error) {
          console.error();
        }
      }
      fetchAllTeams();
    }, []);

    const getTeams = () =>
    filteredTeams.slice(
      MAX_TEAMSCENTRE_PER_PAGE * page - MAX_TEAMSCENTRE_PER_PAGE,
      MAX_TEAMSCENTRE_PER_PAGE * (page -1) + MAX_TEAMSCENTRE_PER_PAGE
    );
    const searchTeams = () => {
      if (!searchValue) {
        setFilteredTeams(teams);
        return;
      }

      const filteredTeamsByName = teams.filter((team) =>
      team.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    );

  
  setFilteredTeams(filteredTeamsByName);
  };
  const resetSearch = () => {
    setFilteredTeams(teams);
    setSearchValue("");
  };
       return (
<div className="TeamsPages">
      <Header />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          searchTeams();
        }}
      >
    <div className='form'>
      <input 
          className='search'
          placeholder="Поиск..."
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
          />
      <button type='submit' 
         className='quest'>
          Поиск
          </button>
      <button className='lose' onClick={resetSearch}>
          Cбросить
         </button>
    </div>
     </form>
      {!filteredTeams.length && teams.length ? (
        <p style={{ color: "white" }}>Ничего не найдено</p>
        ) : teams.length ? (
        <Fragment>
      <TeamsCentre teams={getTeams()}/>
      <div className="pagination">
           <Pagination  
           current={page}
           onChange={(page) => setPage(page)}
           pageSize={MAX_TEAMSCENTRE_PER_PAGE}
           showSizeChanger={false}
           total={teams.length} />
            </div>
            <Footer />
            </Fragment>
      )
      :( <Loader />
      )}
</div>
     )
}
export default Teams;

