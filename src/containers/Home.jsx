import React, {memo, useState, useEffect, useCallback} from 'react';
import Api from '../api'
import Panel from '../components/Panel'
import Board from '../components/Board'
import {
    makeStyles,
    Container,
} from '@material-ui/core';

//Configurações de Estilo da aplicação
const useStyles = makeStyles((theme) => ({
    root:{
      background: "#d3d3d3",
      height: '100vh',
    },
  }))

function Home(){
    //configuração das variáveis que irão receber os dados da api pública
    const [data, setData] = useState({})
    const [country, setCountry] = useState('brazil')

    const getCovidData = useCallback((country) =>{
        Api.getCountry(country)
            .then(data => setData(data))
    }, [])

    useEffect(()=>{
        getCovidData(country)
    }, [getCovidData, country])

    //instanciado as configurações de estilo
    const classes = useStyles();

    return(
        <div className={classes.root}>
            <Container maxWidth="md">
                <Panel />
                <Board data={data}/>
            </Container>
               
        </div>
    );
}

export default memo(Home);