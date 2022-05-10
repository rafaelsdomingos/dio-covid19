import React, { memo } from 'react';
import { ThemeProvider, createTheme } from '@material-ui/core';
import Home from './containers/Home'



function App() {

  //Configuração do tema do projeto
  const theme = createTheme({
    spacing: 4,
    
    palette:{
      primary:{
        main: "#ff4336",
      },
      secondary:{
        main: "#3f51b5",
      },
    },
    

  });

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default memo(App);
