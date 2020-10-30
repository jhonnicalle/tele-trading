import { MuiThemeProvider } from '@material-ui/core';
import React from 'react';
import { THEME } from './AppStyles';
// import { BrowserRouter } from 'react-router-dom';
import ContactUs from './components/ContactUs/ContactUs';
import Guarantee from './components/Guarantee/Guarantee';
import Header from './components/Header/Header';
import Map from './components/Map/Map';
import Services from './components/Services/Services';
import Values from './components/Values/Values';

const location = {
  address: '1600 Amphitheatre Parkway, Mountain View, california.',
  lat: 10.478056,
  lng: -66.911889,
  
}

const App = () => {
  return (
    <MuiThemeProvider theme={THEME}>
        <div>
          <Header />
          <Services />
          <Values />
          <Guarantee />
          <Map location={location} zoomLevel={11} />
          <ContactUs />
        </div>
      
    </MuiThemeProvider>
    
  );
}

export default App;
