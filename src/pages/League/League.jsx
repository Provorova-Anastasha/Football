import React, { Fragment,useEffect,useState } from 'react';
import { Pagination } from "antd";
import Header from '../../components/Header';
import LeagueCentre from '../../components/LeagueCentre';
import Footer from '../../components/Footer';
import { apiCreate } from '../../api/api';
import './League.css';
import {MAX_LEAGUECENTRE_PER_PAGE} from "../../utils/constans"
import {filterByField} from "../../utils/utils"




const League = () => {
  const [ligs, setLigs] = useState([]);
  const [filteredLigs, setFilteredLigs] = useState([]);
  const [page, setPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    async function fetchAllLigs() {
      try {
        const allLigs = await apiCreate.get("/competitions");
        setLigs(allLigs.data.competitions);
        setFilteredLigs(allLigs.data.competitions);
      } catch (error) {
        console.error(error);
      }
    }
    fetchAllLigs();
  }, []);

  const getCompetitions = () =>
  filteredLigs.slice(
      MAX_LEAGUECENTRE_PER_PAGE * page - MAX_LEAGUECENTRE_PER_PAGE,
      MAX_LEAGUECENTRE_PER_PAGE * (page -1) + MAX_LEAGUECENTRE_PER_PAGE
    );

    const searchLigs = () => {
      if (!searchValue) {
        setFilteredLigs(ligs);
        return;
      }

    const filteredLigsByName = filterByField(ligs, "name", searchValue);
    const filteredLigsByCountry = filterByField(ligs, "area", searchValue);
    const allFilteredLigs = [...filteredLigsByCountry, ...filteredLigsByName];

    const ids = new Set(allFilteredLigs.map(({ id }) => id));
    const uniqueLigs = allFilteredLigs.filter(({ id }) => {
      if (ids.has(id)) {
        ids.delete(id);
        return true;
      }
       return false;
    });

  setFilteredLigs(uniqueLigs);
  };
const resetSearch = () => {
    setFilteredLigs(ligs);
    setSearchValue("");
  };

  const allMainLig = () => {
    return ligs.length ? (
      <>
        <LeagueCentre ligs={getCompetitions()}/>
        <div className="pagination">
         <Pagination  
         current={page}
         onChange={(page) => setPage(page)}
         pageSize={MAX_LEAGUECENTRE_PER_PAGE}
         showSizeChanger={false}
         total={filteredLigs?.length} />
          </div>
         <Footer />
      </>
    )
    :(<p className = "loading">Loading...</p>
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    searchLigs();
  }
  
    return (
    <div className="LeaguePages">
    <Header />
    <form
        onSubmit={handleSubmit}
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

   
   {!filteredLigs.length && ligs.length ? (
        <p style={{ color: "white" }}>Ничего не найдено</p>
      ) : (allMainLig())}
      </div>
    )
}
export default League;
