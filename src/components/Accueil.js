import React from 'react';
import Pagination from "react-js-pagination";

function Accueil() {
    return (
        <div>
            <Pagination count={10} variant="outlined" shape="rounded" />
            Accueil
        </div>
    )
}

export default Accueil
