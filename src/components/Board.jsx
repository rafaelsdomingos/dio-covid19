import {React, memo} from "react";
import { Grid, Paper, Card } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton"

function Board({data}){
    const {cases, deaths, todayDeaths, todayCases, casesPerOneMillion, deathsPerOneMillion  } = data

    const getValue = (value) => value ? value : <Skeleton variant="text" width={182} height={60}/>
    return(
        <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} md={6}>
                <Paper elevation={3} style={{width: '100%', height: 200}}>
                    <h3>{cases}</h3>
                    <h3>Total de Casos</h3>
                </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
                <Paper elevation={3} style={{width: '100%', height: 200}}>
                    <h3>{deaths}</h3>
                    <h3>Total de Mortes</h3>
                </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
                <Paper elevation={3} style={{width: '100%', height: 200}}>
                    <h3>{todayCases}</h3>
                    <h3>Casos do Dia</h3>
                </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
                <Paper elevation={3} style={{width: '100%', height: 200}}>
                    <h3>{todayDeaths}</h3>
                    <h3>Mortes do Dia</h3>
                </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
                <Paper elevation={3} style={{width: '100%', height: 200}}>
                    <h3>{casesPerOneMillion}</h3>
                    <h3>casos por milhão</h3>
                </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
                <Paper elevation={3} style={{width: '100%', height: 200}}>
                    <h3>{deathsPerOneMillion}</h3>
                    <h3>Mortes por milhão</h3>
                </Paper>
            </Grid>
        </Grid>
    );
}

export default memo(Board);