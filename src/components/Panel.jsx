import {React, memo} from "react";
import { Grid, Paper, makeStyles, Typography, Select, MenuItem, FormControl, Button } from "@material-ui/core";
import COUNTRIES from '../commons/constants/countries'
import CovidImg from '../assets/images/covid3.jpg';


//Configurações de Estilo do componente
const useStyles = makeStyles((theme) => ({
    panel:{
      width: '100%',
      height: 300,
      display: 'flex',
    //   flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },

  }))


const navigatorHasShare = navigator.share;


function Panel(country, data, onChange, getCovidData){

    const {cases, deaths, todayDeaths, todayCases, casesPerOneMillion, deathsPerOneMillion  } = data

    const classes = useStyles();

    const renderCountries = (country, index) => (
        <MenuItem key={`country-${index}`} value={country.value}>
            <div>{country.label}</div>
            <img src={country.flag} alt={`Pais-${country.label}`}/>
        </MenuItem>
    )

    
    return(
        <Grid container spacing={2} justifyContent="center" alignItems="center" style={{marginBottom: 10}}>
            <Paper elevation={3} className={classes.panel}>
                
                <Typography variant="h4">
                    <strong>COVID-19</strong>
                </Typography>
                <Typography variant="h6">
                    <strong>PAINEL CORONA VÍRUS</strong>
                </Typography>

                <Select onChange={onChange}>
                    {COUNTRIES.map(renderCountries)}
                </Select>
               
                <Typography variant="body2">
                    Atualizado em 
                </Typography>

            </Paper>
        </Grid>
    );
}

export default memo(Panel);