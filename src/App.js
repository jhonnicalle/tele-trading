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
  address: 'Calle Gral. Vara de Rey, 26, 26002 Logroño, La Rioja',
  lat: 42.461729,
  lng: -2.445833,  
}

const App = () => {
  return (
    <MuiThemeProvider theme={THEME}>
      <div>
        <Header />
        <Services />
        <Values />
        <Guarantee />
        <Map location={location} zoomLevel={17} />
        <ContactUs />
      </div>
    </MuiThemeProvider>
    
  );
}

export default App;
