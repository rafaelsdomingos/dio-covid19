import {React, memo} from "react";
import { Grid, Paper, Typography } from "@material-ui/core";

function Panel(){

    return(
        <Grid container spacing={2} justifyContent="center" alignItems="center" style={{marginBottom: 10}}>
            <Paper elevation={3} style={{width: '100%', height: 300, textAlign: 'center'}}>
                <Typography variant="h4">
                    COVID-19
                </Typography>
                <Typography variant="h5">
                    Painel Corona vírus
                </Typography>
                <Typography variant="body2">
                    Atualizado em 
                </Typography>
            </Paper>
        </Grid>
    );
}

export default memo(Panel);