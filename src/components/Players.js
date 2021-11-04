import React from 'react'

const Players = ( {players} ) => {
    return (
        <div>
             {players &&
                players.map((item) =>
                    (
                        <div key={item.id}>
                            <p>{item.name}</p>
                        </div>
                    )
                )
            }
           
        </div>
    )
}

export default Players
