import {React, memo} from "react";
import { Grid, Paper, makeStyles, Typography, Select, MenuItem, } from "@material-ui/core";
import COUNTRIES from '../commons/constants/countries.js'


//Configurações de Estilo do componente
const useStyles = makeStyles((theme) => ({
    panel:{
      width: '100%',
      height: 200,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    selectContainer:{
        display: 'flex',
        width: '50%',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: '30'

    },
    menuItem:{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',

    }

  }))


function Panel({country, data, onChange, getCovidData}){

    const {cases, deaths, todayDeaths, todayCases, casesPerOneMillion, deathsPerOneMillion  } = data

    const classes = useStyles();

    const renderCountries = (country, index) => (
        <MenuItem key={`country-${index}`} value={country.value}>
            <div className={classes.menuItem}>
                <div>{country.label}</div>
                <div><img src={country.flag} alt={`Pais-${country.label}`}/></div>
            </div>
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

                <div className={classes.selectContainer}>
                    
                    <Select onChange={onChange} labelWidth>
                        {COUNTRIES.map(renderCountries)}
                    </Select>
                    
                    <Typography variant="body2">
                        Atualizado em
                    </Typography>
                </div>

            </Paper>
        </Grid>
    );
}

export default memo(Panel);