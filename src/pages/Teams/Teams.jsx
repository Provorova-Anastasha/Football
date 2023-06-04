import React, { Fragment, useEffect, useState } from "react";
import Header from "../../components/Header";
import TeamsCentre from "../../components/TeamsCentre";
import Footer from "../../components/Footer";
import { apiCreate } from "../../api/api";
import { Pagination } from "antd";
import "./TeamsStyle.css";
import Loader from "../../components/Loader/Loader";
import { MAX_TEAMSCENTRE_PER_PAGE } from "../../utils/constans";
import { filterByField } from "../../utils/utils";
import { Search } from "../../components/Search/Search";

const Teams = () => {
  const [teams, setTeams] = useState([]);
  const [filteredTeams, setFilteredTeams] = useState([]);
  const [page, setPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    async function fetchAllTeams() {
      try {
        const allTeams = await apiCreate.get("/teams");
        setTeams(allTeams.data.teams);
        setFilteredTeams(allTeams.data.teams);
      } catch (error) {
        console.error(error);
      }
    }
    fetchAllTeams();
  }, []);

  const getTeams = () =>
    filteredTeams.slice(
      MAX_TEAMSCENTRE_PER_PAGE * page - MAX_TEAMSCENTRE_PER_PAGE,
      MAX_TEAMSCENTRE_PER_PAGE * (page - 1) + MAX_TEAMSCENTRE_PER_PAGE
    );
  const searchTeams = () => {
    if (!searchValue) {
      setFilteredTeams(teams);
      return;
    }

    const filteredTeamsByName = filterByField(teams, "name", searchValue);

    setFilteredTeams(filteredTeamsByName);
  };
  const resetSearch = () => {
    setFilteredTeams(teams);
    setSearchValue("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchTeams();
  };

  return (
    <div className="TeamsPages">
      <Header />
      <Search
        searchValue={searchValue}
        searchEntities={searchTeams}
        resetSearch={resetSearch}
        setSearchValue={setSearchValue}
      />
      {!filteredTeams.length && teams.length ? (
        <p style={{ color: "white" }}>Ничего не найдено</p>
      ) : teams.length ? (
        <>
          <TeamsCentre teams={getTeams()} />
          <div className="pagination">
            <Pagination
              current={page}
              onChange={(page) => setPage(page)}
              pageSize={MAX_TEAMSCENTRE_PER_PAGE}
              showSizeChanger={false}
              total={teams.length}
            />
          </div>
          <Footer />
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};
export default Teams;
