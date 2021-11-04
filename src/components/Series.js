import React from 'react';
import { BrowserRouter as Route, Link } from "react-router-dom";
import '../css/Series.css';

const Series = ( {series} ) => {

    return (
        <div>
            {series &&
                series.map((item) =>
                    (
                        <div key={item.id}>
                            <p>Begin : {item.begin_at}</p>
                            <p>End : {item.end_at}</p>
                            {item.winner_id &&
                                <p>
                                    <Link to={`/teams/${item.winner_id}`}>                               
                                        <span className="card-series">Winner Team</span>                     
                                    </Link>
                                </p>
                            }
                        </div>
                    )
                )
            }         
        </div>
    )
}

export default Series
