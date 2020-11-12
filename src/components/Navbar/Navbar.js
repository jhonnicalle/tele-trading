import { AppBar, Tab, Tabs, useScrollTrigger } from '@material-ui/core';
import React from 'react'
import PropTypes from 'prop-types';
import { useStyles } from './NavbarStyles';
import { HashLink } from 'react-router-hash-link';

// import { propType } from '../../App';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Values from '../Values/Values';
import Guarantee from '../Guarantee/Guarantee';
import Map from '../Map/Map';
import ContactUs from '../ContactUs/ContactUs';

const ElevationScroll = (props) =>{
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

const location = {
  address: 'Calle Gral. Vara de Rey, 26, 26002 Logroño, La Rioja',
  lat: 42.461729,
  lng: -2.445833,
}


const propType = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

const Navbar = (props) => {

  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <React.Fragment>

      <ElevationScroll {...props}>
        <AppBar>
          <Tabs
            value={value}
            onChange={handleChange}
            // indicatorColor="inherit"
            // textColor="secondary"
            centered
          >
            <Tab label="Inicio"><HashLink to="#with-hash-fragment">Link to Hash Fragment</HashLink></Tab>
            <Tab label="Servicios" />
            <Tab label="Valores" />
            <Tab label="Garantia" />
            <Tab label="Ubicacion" />
            <Tab label="Contactanos"><HashLink smooth to={`${propType.location}#contactus`}/></Tab>

          </Tabs>
        </AppBar>

      </ElevationScroll>
      <Header id="header" />
      <Services />
      <Values />
      <Guarantee />
      <Map location={location} zoomLevel={17} />
      <ContactUs/>
    </React.Fragment>
  )
}

export default Navbar