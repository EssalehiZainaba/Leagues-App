import React from 'react'
import { useParams } from 'react-router-dom';
import useFetchId from '../api/useFetch';
import Players from './Players';

const Team = () => {
    const { teamId } = useParams();
    const {data} = useFetchId(process.env.REACT_APP_TEAMS_API_URL +"/"+ teamId)
    
    return (
        <div>
             <h2> Détailles team : {teamId} </h2>
            {
                data && 
                <div>
                    <img src={data.image_url} className="img"/>
                    <div>{data.id}</div>
                    <div>{data.name}</div>
                    <div>{data.modified_at}</div>
                    <div>
                        <Players players={data.players} />
                    </div>   
                </div>
            }
        </div>
    )
}

export default Team
