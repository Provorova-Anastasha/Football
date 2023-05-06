import React, { Fragment,useEffect,useState } from 'react';
import Header from '../../components/Header';
import LeagueCentre from '../../components/LeagueCentre';
import Footer from '../../components/Footer';
import { apiCreate } from '../../api/api';
import {Pagination} from 'antd';
import './League.css';

const MAX_LEAGUECENTRE_PER_PAGE = 6;

const League = () => {
    const [ligs, setLigs] = useState([]);
    const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchAllLigs() {
      try {
        const allLigs = await apiCreate.get('/competitions');
        setLigs(allLigs.data.competitions);
      } catch (error) {
        console.error();
      }
    }
    fetchAllLigs();
  }, []);

  const getCompetitions = () =>
    ligs.slice(
      MAX_LEAGUECENTRE_PER_PAGE * page - MAX_LEAGUECENTRE_PER_PAGE,
      MAX_LEAGUECENTRE_PER_PAGE * (page -1) + MAX_LEAGUECENTRE_PER_PAGE
    );

    return (
    <React.Fragment>
      <Header />
      {ligs.length ? (
        <Fragment>
          <LeagueCentre ligs={getCompetitions()}/>
          <div className="pagination">
           <Pagination  
           current={page}
           onChange={(page) => setPage(page)}
           pageSize={MAX_LEAGUECENTRE_PER_PAGE}
           showSizeChanger={false}
           total={ligs?.length} />;
            </div>
        </Fragment>
      )
      :(<p className = "loading">Loading...</p>
      )}
      <Footer />
    </React.Fragment>
    )
}
export default League;
