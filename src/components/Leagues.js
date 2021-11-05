import { useContext, React, useState, useEffect } from 'react';
import '../css/Leagues.css';
import useFetch from '../api/useFetch';
import { BrowserRouter as Route, Link } from "react-router-dom";
import contextVal from '../Context';
import ReactPaginate from 'react-paginate';

const Leagues = () => {

    const {data} = useFetch(process.env.REACT_APP_LEAGUES_API_URL)
    const [FilterData, setFilterData] = useState([])
    const SelectedGame = useContext(contextVal);
    
    const [pageNumber, setPageNumber] = useState(0);

    const LeaguesPerPage = 5;
    const pagesVisited = pageNumber * LeaguesPerPage;

    const pageCount = FilterData? Math.ceil(FilterData.length / LeaguesPerPage) : "";

    const changePage = ({selected}) => {
        setPageNumber(selected)
    }

    const displayLeagues = FilterData? FilterData.slice(pagesVisited, pagesVisited + LeaguesPerPage).map((league) => {
        return (
            <Link to={`/leagues/${league.id}`}>
                <div className="card" key={league.id}>                    
                    <div className="cover artist">
                        <img src={league.image_url} alt="cover"/>
                        <div className="play-icon">                                   
                            <i className="fa fa-info-circle"></i>                                                        
                        </div>
                    </div>
                    <div className="card-content">
                        <h4> {league.name} </h4>
                    </div>
                </div>
            </Link>                 
        );
    }): "" ;


    const handleFilter=()=>{
        if(SelectedGame.id && data){
            setFilterData(data.filter(data => data.videogame.id === SelectedGame.id))
        }
        else{
            setFilterData(data)
        }
    }

    useEffect(()=>{
        handleFilter();
    }, [SelectedGame, data]);

    return (
        <div className="items-div">
            {displayLeagues}
            {FilterData &&
                <ReactPaginate previousLabel={"Previous"} 
                               nextLabel={"next"} 
                               pageCount={pageCount} 
                               onPageChange={changePage}
                               containerClassName={"paginationBttns"}
                               previousLinkClassName={"previousBttn"}
                               nextLinkClassName={"nextBttn"}
                               disabledClassName={"paginationDisabled"}
                               activeClassName={"paginationActive"}
                               color="primary"
                />
            }                 
        </div>
    )
}

export default Leagues
