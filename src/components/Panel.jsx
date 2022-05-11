import {React, memo} from "react";
import { Grid, Paper, makeStyles, Typography, Select, MenuItem, Button} from "@material-ui/core";
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
        width: 340,
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 20,
        gap: 10

    },
    menuItem:{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',

    }
  }))

const navigatorHasShare = navigator.share


function Panel({country, data, onChange, getCovidData, updateAt}){

    const { recovered  } = data
    const classes = useStyles();

    const renderCountries = (country, index) => (
        <MenuItem key={`country-${index}`} value={country.value}>
            <div className={classes.menuItem}>
                <div>{country.label}</div>
                <div><img src={country.flag} alt={`Pais-${country.label}`}/></div>
            </div>
        </MenuItem>
    )

    const textCovid19 = `País: ${country} - recuperados: ${recovered}`

    const copyInfo = () => {
        navigator.clipboard.writeText(textCovid19)
    }

    const shareInfo = () =>{
        navigator.share({
            title: `Dados do Covid19 - ${country}`,
            text: textCovid19,
            url: 'https://consultacovid19dio.netlify.app/'
        })
    }

    const renderShareButton = (
        <div>
            <Button variant="contained" color="secondary" onClick={shareInfo}>Compartilhar</Button>
        </div>
    )
    
    const renderCopyButton = (
        <div>
            <Button variant="contained" color="secondary" onClick={copyInfo}>Copiar</Button>
        </div>
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
                
                <Typography variant="body2" color="primary">
                        Atualizado em: <strong>{updateAt}</strong>
                </Typography>

                <div className={classes.selectContainer}>
                    <Select onChange={onChange} value={country} fullWidth>
                        {COUNTRIES.map(renderCountries)}
                    </Select>

                    {navigatorHasShare ? renderShareButton : renderCopyButton}
                </div>

            </Paper>
        </Grid>
    );
}

export default memo(Panel);