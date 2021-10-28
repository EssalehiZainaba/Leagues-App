import { useContext, React, useState, useEffect } from 'react';
import '../css/Leagues.css';
import useFetch from '../api/useFetch';
import { BrowserRouter as Route, Link } from "react-router-dom";
import contextVal from '../Context';

const Leagues = () => {
    const {data} = useFetch(process.env.REACT_APP_LEAGUES_API_URL)
    const [FilterData, setFilterData] = useState([])
    const SelectedGame = useContext(contextVal);

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
        <div className="leagues">
            {FilterData &&
                FilterData.map(league =>
                    (   <div className="card">                    
                            <div className="cover" key={league.id}>
                                <img src={league.image_url} alt="cover"/>
                                <div className="play-icon">
                                    <Link to={`/leagues/${league.id}`}>
                                        <i className="fa fa-play"></i>                     
                                    </Link>
                                </div>
                            </div>
                            <div className="card-content">
                                <p> {league.name} </p>
                            </div>
                        </div>                    
                    )              
                )
            }
        </div>
    )
}

export default Leagues
