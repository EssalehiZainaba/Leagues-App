import { useContext, React, useState, useEffect } from 'react';
import '../css/teams.css';
import useFetch from '../api/useFetch';
import { BrowserRouter as Route, Link } from "react-router-dom";
import contextVal from '../Context';
import ReactPaginate from 'react-paginate';

const Teams = () => {
    const {data} = useFetch(process.env.REACT_APP_TEAMS_API_URL)
    const [FilterData, setFilterData] = useState([])
    const SelectedGame = useContext(contextVal);

    const [pageNumber, setPageNumber] = useState(0);

    const TeamsPerPage = 5;
    const pagesVisited = pageNumber * TeamsPerPage;

    const pageCount = FilterData? Math.ceil(FilterData.length / TeamsPerPage) : "";

    const changePage = ({selected}) => {
        setPageNumber(selected)
    }

    const displayTeams = FilterData? FilterData.slice(pagesVisited, pagesVisited + TeamsPerPage).map((team) => {
        return (
            <Link to={`/teams/${team.id}`}>
                <div className="card" key={team.id}>                    
                    <div className="cover artist">
                        <img src={team.image_url} alt="cover"/>
                        <div className="play-icon">                                       
                            <i className="fa fa-info-circle"></i>                                                           
                        </div>
                    </div>
                    <div className="card-content">
                        <h4> {team.name} </h4>
                    </div>
                </div> 
            </Link>             
        );
    }): "" ;

    const handleFilter=()=>{
        if(SelectedGame.id && data){
            setFilterData(data.filter(data => data.current_videogame.id === SelectedGame.id))
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
            {displayTeams}
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

export default Teams
