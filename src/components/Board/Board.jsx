import React from "react";
import { PropTypes } from "prop-types";
import {Grid, Skeleton, Card} from '../../components'


function Board(data){
    const { cases, todayDeaths, recovered, deaths, todayCases } = data;

    const getValue = (value) => value ? value : <Skeleton variant="text" width={182} height={60}/>


    return(
        <Grid container spacing={4}>
            <Grid item xs={12} md={3}>
                <Card children={getValue(value)}></Card>
            </Grid>
        </Grid>

    );
}