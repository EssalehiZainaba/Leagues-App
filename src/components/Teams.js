import { useContext, React, useState, useEffect } from 'react';
import '../css/teams.css';
import useFetch from '../api/useFetch';
import { BrowserRouter as Route, Link } from "react-router-dom";
import contextVal from '../Context';
import Pagination from './Pagination';

const Teams = () => {
    const {data} = useFetch(process.env.REACT_APP_TEAMS_API_URL)
    const [FilterData, setFilterData] = useState([])
    const SelectedGame = useContext(contextVal);

    const [currentPage, setCurrentPage] = useState(1);
    const [TeamsPerPage] = useState(5);

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

    
    const indexOfLastTeam = currentPage * TeamsPerPage;
    const indexOfFirstTeam = indexOfLastTeam - TeamsPerPage;
    const currentTeams = FilterData? FilterData.slice(indexOfFirstTeam, indexOfLastTeam): console.log() ;

    const paginate = (pageNumber) => setCurrentPage(pageNumber);


    return (
        <div className="items-div">
             {currentTeams && 
                currentTeams.map((team) =>
                    ( 
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
                    )                 
                )
            }
            {FilterData &&
                <Pagination itemsPerPage={TeamsPerPage} totalItems={FilterData.length} paginate={paginate} />
            }
        </div>
    )
}

export default Teams
