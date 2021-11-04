import React from 'react'
import { useParams } from 'react-router-dom';
import useFetchId from '../api/useFetch';
import Players from './Players';
import '../css/item.css';

const Team = () => {
    const { teamId } = useParams();
    const {data} = useFetchId(process.env.REACT_APP_TEAMS_API_URL +"/"+ teamId)
    
    return (
        <div  className="item-div">
            {
                data &&
                 <div className="card-item">
                    <div className="cover artist">
                        <img src={data.image_url} alt="cover"/>
                    </div>
                    <div className="card-content">
                        <div>{data.name}</div>
                        <div>
                            <Players players={data.players} />
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Team
