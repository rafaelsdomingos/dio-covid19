import React, {useState, useEffect, useCallback} from 'react';
import { ThemeProvider, createTheme } from '@material-ui/core';
import Home from './containers/Home'

function App() {


  //Configuração do tema do projeto
  const theme = createTheme({
    spacing: 4,
    
    palette:{

    },

  });

  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
