import React from 'react';
import useFetch from '../api/useFetch';

const Selector = ({handleChange}) => {

    const {data} = useFetch("https://api.pandascore.co/videogames")

    return (
        <div className="custom-select">
            <select onChange={handleChange}>
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
