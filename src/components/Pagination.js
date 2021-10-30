import React from 'react';
import '../css/Pagination.css'

const Pagination = ({ LeaguesPerPage, totalLeagues, paginate }) => {

    const pageNumbers = [];

    for(let i=1; i<= Math.ceil(totalLeagues / LeaguesPerPage); i++){
        pageNumbers.push(i);
    }

    return (
        <div className="Pagination" >
            <div className="nav">
                <ul>
                    {pageNumbers.map(number =>(
                        <li key={number} className="page-item">
                            <a onClick={()=> paginate(number)} link='!#' className="page-link">
                                {number}
                            </a>
                        </li>
                    ))}
            </ul>
           </div>
        </div>
    )
}

export default Pagination
