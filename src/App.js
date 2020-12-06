import { MuiThemeProvider } from '@material-ui/core';
import React from 'react';
import { THEME } from './AppStyles';
// import Navbar from './components/Navbar/Navbar';
import Navbar2 from './components/Navbar/Navbar2';

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
