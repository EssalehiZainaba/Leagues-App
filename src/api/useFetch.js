import { useEffect, useState } from 'react';

const useFetch = (url) => {

    const [data, setData] = useState();
    var bearer = 'Bearer ' + process.env.REACT_APP_TOKEN;
    useEffect(()=>{
        fetch(url, {
            headers: {
                'Accept': 'application/json', 
                'Authorization': bearer,
            }
        })
        .then(res => res.json())
        .then(
        (items) => {
            setData(items);
        },
        (err) =>{
            console.log(err)
        }
        );
    }, [url]);

    return {data}
    
}

export default useFetch;