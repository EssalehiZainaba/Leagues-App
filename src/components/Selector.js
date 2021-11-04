import React from 'react';
import useFetch from '../api/useFetch';

const Selector = ({handleChange}) => {

    const {data} = useFetch(process.env.REACT_APP_GAMES_API_URL)

    return (
        <div className="custom-select">
            <select onChange={handleChange} value={ localStorage.getItem("game") ? localStorage.getItem("game") : [] }>
                <option value="[]">All Games</option>
                {data &&
                    data.map((item) =>
                        (   
                            <option key={item.id} value={JSON.stringify(item)}>{item.name}</option>
                        )
                    )
                }
            </select>
                        
        </div>
    )
}

export default Selector
