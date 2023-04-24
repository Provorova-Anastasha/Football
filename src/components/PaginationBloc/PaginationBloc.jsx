import React from "react";
import {Pagination} from 'antd';
import './Pagination.css';

const PaginationBloc = () => {
    return (
        <div className="pagination">
           <Pagination  total={150} />;
            </div>
    )
}
export default PaginationBloc;