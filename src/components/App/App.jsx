import './App.css';
import React, {useState, useEffect, useCallback} from 'react';
import Api from '../../api'

function App() {

  const [data, setData] = useState({})
  const [country, setCountry] = useState('brazil')

  const getCovidData = useCallback((country) => {
    Api.getCountry(country)
      .then(data => setData(data))
  }, [])

  const {cases, todayDeaths, recovered, deaths, todayCases } = data


  useEffect(() => {
    getCovidData(country)
  }, [getCovidData, country])

  return (
    <div className="App">
      <h1>Início</h1>
      <h3>Total de casos: {cases}</h3>
      <h3>Mortes: {deaths}</h3>
      <h3>Mortes Diárias: {todayDeaths}</h3>
      <h3>Casos Diários: {todayCases}</h3>
      <h3>Recuperados: {recovered}</h3>
    </div>
  );
}

export default App;
