import { MuiThemeProvider } from '@material-ui/core';
import React from 'react';
import { THEME } from './AppStyles';
// import { BrowserRouter } from 'react-router-dom';
import ContactUs from './components/ContactUs/ContactUs';
import Guarantee from './components/Guarantee/Guarantee';
import Header from './components/Header/Header';
import Services from './components/Services/Services';
import Values from './components/Values/Values';

const App = () => {
  return (
    <MuiThemeProvider theme={THEME}>
        <div>
          <Header />
          <Services />
          <Values />
          <Guarantee />
          <ContactUs />
        </div>
      
    </MuiThemeProvider>
    
  );
}

export default App;
