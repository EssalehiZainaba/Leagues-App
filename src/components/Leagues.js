import { useContext, React, useState, useEffect } from 'react';
import '../css/Leagues.css';
import useFetch from '../api/useFetch';
import { BrowserRouter as Route, Link } from "react-router-dom";
import Pagination from './Pagination'
import contextVal from '../Context';

const Leagues = () => {

    const {data} = useFetch(process.env.REACT_APP_LEAGUES_API_URL)
    const [FilterData, setFilterData] = useState([])
    const SelectedGame = useContext(contextVal);
    
    const [currentPage, setCurrentPage] = useState(1);
    const [LeaguesPerPage] = useState(5);

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

    const indexOfLastLeague = currentPage * LeaguesPerPage;
    const indexOfFirstLeague = indexOfLastLeague - LeaguesPerPage;
    const currentLeagues = FilterData? FilterData.slice(indexOfFirstLeague, indexOfLastLeague): "" ;

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div className="items-div">
            {currentLeagues &&
                currentLeagues.map(league =>

                    (
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
                    )              
                )
            }
            {FilterData &&
                <Pagination itemsPerPage={LeaguesPerPage} totalItems={FilterData.length} paginate={paginate} color="primary"/>
            }
                   
        </div>
    )
}

export default Leagues
