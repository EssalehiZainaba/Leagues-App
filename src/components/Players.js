import React from 'react'

const Players = ( {players} ) => {
    return (
        <div>
             {players &&
                players.map((item) =>
                    (
                        <div key={item.id}>
                            {/* <p>Nationality : {item.nationality}</p> */}
                            <p>Name : {item.name}</p>
                            {/* <p>Slug : {item.slug}</p> */}
                        </div>
                    )
                )
            }
           
        </div>
    )
}

export default Players
