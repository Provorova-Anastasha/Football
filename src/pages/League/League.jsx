import React, { Fragment,useEffect,useState } from 'react';
import { Pagination } from "antd";
import Header from '../../components/Header';
import LeagueCentre from '../../components/LeagueCentre';
import Footer from '../../components/Footer';
import { apiCreate } from '../../api/api';
import './League.css';




const MAX_LEAGUECENTRE_PER_PAGE = 6;

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
        console.error();
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

      const filteredLigsByName = ligs.filter((liga) =>
      liga.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    );

    const filteredLigsByCountry = ligs.filter((liga) =>
      liga.area.name
        .toLocaleLowerCase()
        .includes(searchValue.toLocaleLowerCase())
    );
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
      <Fragment>
        <LeagueCentre ligs={getCompetitions()}/>
        <div className="pagination">
         <Pagination  
         current={page}
         onChange={(page) => setPage(page)}
         pageSize={MAX_LEAGUECENTRE_PER_PAGE}
         showSizeChanger={false}
         total={filteredLigs?.length} />;
          </div>
         <Footer />
      </Fragment>
    )
    :(<p className = "loading">Loading...</p>
    )
  }
    return (
    <div className="LeaguePages">
    <Header />
    <form
        onSubmit={(e) => {
          e.preventDefault();
          searchLigs();
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

   
   {!filteredLigs.length && ligs.length ? (
        <p style={{ color: "white" }}>Ничего не найдено</p>
      ) : (allMainLig())}
      </div>
    )
}
export default League;
