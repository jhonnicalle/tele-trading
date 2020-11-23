import { MuiThemeProvider } from '@material-ui/core';
import React from 'react';
import { THEME } from './AppStyles';
// import Navbar from './components/Navbar/Navbar';
import Navbar2 from './components/Navbar/Navbar2';
// import ContactUs from './components/ContactUs/ContactUs';
// import Guarantee from './components/Guarantee/Guarantee';
// import Header from './components/Header/Header';
// import Map from './components/Map/Map';
// import Services from './components/Services/Services';
// import Values from './components/Values/Values';

const App = () => {
  return (
    <MuiThemeProvider theme={THEME}>
      <div>
        <Navbar2 />
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
