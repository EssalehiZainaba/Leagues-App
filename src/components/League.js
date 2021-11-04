import React from 'react';
import { useParams } from 'react-router-dom';
import useFetchId from '../api/useFetch';
import Series from './Series'
import '../css/item.css'

function League() {
    const { leagueId } = useParams();
    const {data} = useFetchId(process.env.REACT_APP_LEAGUES_API_URL +"/"+ leagueId)

    return (
        <div className="item-div">
            {data && 
                <div className="card-item">
                    <div className="cover artist">
                        <img src={data.image_url} alt="cover"/>
                    </div>
                    <div className="card-content">
                        <div>{data.name}</div>
                        <div>{data.videogame.name}</div>
                        <div>
                            <Series series={data.series} />
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default League
