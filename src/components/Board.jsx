import {React, memo} from "react";
import { Grid, Paper, Typography, makeStyles } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton"


//Configuração CSS do componente
const useStyles = makeStyles((theme) => ({
    paper:{
        width: '100%', 
        height: 150,
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopWidth: 20,
        borderTopStyle: 'solid'
    },
  }))

function Board({data}){
    const {cases, deaths, todayDeaths, todayCases, casesPerOneMillion, deathsPerOneMillion  } = data

    const classes = useStyles();

    const getValue = (value) => value ? value : <Skeleton variant="text" width={182} height={60}/>
    return(
        <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={6}>
                <Paper elevation={3} className={classes.paper} style={{borderTopColor: '#2196f3'}}>
                    <Typography variant="h4">{cases}</Typography>
                    <Typography variant="h6"><strong>Total de Casos</strong></Typography>
                </Paper>
            </Grid>

            <Grid item xs={12} md={6}>
                <Paper elevation={3} className={classes.paper} style={{borderTopColor: '#d50000'}}>
                    <Typography variant="h4">{deaths}</Typography>
                    <Typography variant="h6"><strong>Total de Mortes</strong></Typography>
                </Paper>
            </Grid>

            <Grid item xs={12} md={6}>
                <Paper elevation={3} className={classes.paper} style={{borderTopColor: '#303f9f'}}>
                    <Typography variant="h4">{todayCases}</Typography>
                    <Typography variant="h6"><strong>Casos de Hoje</strong></Typography>
                </Paper>
            </Grid>

            <Grid item xs={12} md={6}>
                <Paper elevation={3} className={classes.paper} style={{borderTopColor: '#f44336'}}>
                    <Typography variant="h4">{todayDeaths}</Typography>
                    <Typography variant="h6"><strong>Mortes de Hoje</strong></Typography>
                </Paper>
            </Grid>

            <Grid item xs={12} md={6}>
                <Paper elevation={3} className={classes.paper} style={{borderTopColor: '#00695c'}}>
                    <Typography variant="h4">{casesPerOneMillion}</Typography>
                    <Typography variant="h6"><strong>Casos por Milhão</strong></Typography>
                </Paper>
            </Grid>

            <Grid item xs={12} md={6}>
                <Paper elevation={3} className={classes.paper} style={{borderTopColor: '#4e342e'}}>
                    <Typography variant="h4">{deathsPerOneMillion}</Typography>
                    <Typography variant="h6"><strong>Mortes por Milhão</strong></Typography>
                </Paper>
            </Grid>

        </Grid>
    );
}

export default memo(Board);