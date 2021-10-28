import React from 'react';
import { useParams } from 'react-router-dom';
import useFetchId from '../api/useFetch';
import Series from './Series'

function League() {
    const { leagueId } = useParams();
    const {data} = useFetchId(process.env.REACT_APP_LEAGUES_API_URL +"/"+ leagueId)

    return (
        <div>
            <h2> Détailles League : {leagueId} </h2>
            {
                data && 
                <div>
                    <img src={data.image_url} className="img"/>
                    <div>{data.id}</div>
                    <div>{data.name}</div>
                    <div>{data.videogame.name}</div>
                    <div>
                        <Series series={data.series} />
                    </div>
                </div>
            }
        </div>
    )
}

export default League
