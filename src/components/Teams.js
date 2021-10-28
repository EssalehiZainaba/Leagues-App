import { useContext, React, useState, useEffect } from 'react';
import '../css/teams.css';
import useFetch from '../api/useFetch';
import { BrowserRouter as Route, Link } from "react-router-dom";
import contextVal from '../Context';

const Teams = () => {
    const {data} = useFetch(process.env.REACT_APP_TEAMS_API_URL)
    const [FilterData, setFilterData] = useState([])
    const SelectedGame = useContext(contextVal);

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
        <div>
             {FilterData && 
                FilterData.map((team) =>
                    ( 
                        <div className="container-teams" key={team.id}>
                            <div className="item-team">
                                <Link to={`/teams/${team.id}`}>                               
                                    <img src={team.image_url} className="img"/>                          
                                </Link>
                            </div>                   
                            <div className="item-team"><p> {team.name} </p></div>
                            <div className="item-team"><p> {team.slug} </p></div>   
                                                           
                        </div>
                    )                 
                )
            }
        </div>
    )
}

export default Teams
