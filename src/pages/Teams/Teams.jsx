import React, { Fragment,useEffect,useState } from 'react';
import Header from '../../components/Header';
import TeamsCentre from '../../components/TeamsCentre';
import Footer from '../../components/Footer';
import { apiCreate } from '../../api/api';
import {Pagination} from 'antd';
import './TeamsStyle.css';

const MAX_TEAMSCENTRE_PER_PAGE = 6;

const Teams = () => {
  const [teams, setTeams] = useState([]);
  const [page, setPage] = useState(1);

    useEffect(() => {
      async function fetchAllTeams() {
        try {
          const allTeams = await apiCreate.get('/teams');
          setTeams(allTeams.data.teams);
          } catch (error) {
          console.error();
        }
      }
      fetchAllTeams();
    }, []);

    const getTeams = () =>
    teams.slice(
      MAX_TEAMSCENTRE_PER_PAGE * page - MAX_TEAMSCENTRE_PER_PAGE,
      MAX_TEAMSCENTRE_PER_PAGE * (page -1) + MAX_TEAMSCENTRE_PER_PAGE
    );
       return (
    <React.Fragment>
      <Header />
      {teams?.length ? (
        <Fragment>
      <TeamsCentre teams={getTeams()}/>
      <div className="pagination">
           <Pagination  
           current={page}
           onChange={(page) => setPage(page)}
           pageSize={MAX_TEAMSCENTRE_PER_PAGE}
           showSizeChanger={false}
           total={teams.length} />;
            </div>
        </Fragment>
      )
      :(<p className = "loading">Loading...</p>
      )}
      <Footer />
    </React.Fragment>
    )
}
export default Teams;

