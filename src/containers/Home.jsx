import React, {useState, useEffect, useCallback} from 'react';
import Api from '../api'
import Board from '../components/Board/Board'

function Home(){

    const [data, setData] = useState({})
    const [country, setCountry] = useState('brazil')

    const getCovidData = useCallback((country) => {
        Api.getCountry(country)
            .then(data => setData(data))
    }, [])

    useEffect( () =>{
        getCovidData(country)
    },[getCovidData, country])

    return(
        <Board data={data} />
    );
}

export default Home;