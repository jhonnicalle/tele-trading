import { MuiThemeProvider } from '@material-ui/core';
import React from 'react';
import { THEME } from './AppStyles';
import PropTypes from 'prop-types';
// import { BrowserRouter } from 'react-router-dom';
import ContactUs from './components/ContactUs/ContactUs';
import Guarantee from './components/Guarantee/Guarantee';
import Header from './components/Header/Header';
import Map from './components/Map/Map';
import Navbar from './components/Navbar/Navbar';
import Services from './components/Services/Services';
import Values from './components/Values/Values';


const location = {
  address: 'Calle Gral. Vara de Rey, 26, 26002 Logroño, La Rioja',
  lat: 42.461729,
  lng: -2.445833,  
}

// export const propType = {
//   location: PropTypes.shape({
//     pathname: PropTypes.string,
//   }).isRequired,
// };

const App = () => {
  return (
    <MuiThemeProvider theme={THEME}>
      <div>
        <Navbar />
        {/* <Header id="#header" />
        <Services />
        <Values />
        <Guarantee />
        <Map location={location} zoomLevel={17} />
        <ContactUs id="contactus" /> */}
      </div>      
    </MuiThemeProvider>
    
  );
}

export default App;
