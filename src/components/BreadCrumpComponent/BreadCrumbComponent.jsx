import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Breadcrumb } from "antd";
import { apiCreate } from "../../api/api";
import { Link } from "react-router-dom";

import './BreadCrumbStyles.css';

const BreadCrumbComponent = () => {
  const [nameTeam, setNameTeam] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    async function fetchMatches() {
      try {
        const nameTeam = await apiCreate.get(`/teams/${id}`);
        setNameTeam(nameTeam.data.name);
      } catch (error) {
        console.error();
      }
    }
    fetchMatches();
  }, [id]);

  return (
    <Breadcrumb
      className="breadcrumbWrap"
      type="separator"
      separator=">"
      items={[
        {
          title: (
            <Link to="/teams">
              <p className="breadcrumbWrapText"> Команды</p>
            </Link>
          ),
        },
        {
          title: <p className="breadcrumbWrapText">{nameTeam}</p>,
        },
      ]}
    />
  );
};
export default BreadCrumbComponent;
