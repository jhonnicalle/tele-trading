import { AppBar, Tab, Tabs, useScrollTrigger } from '@material-ui/core';
import React from 'react'
import PropTypes from 'prop-types';
// import { useStyles } from './NavbarStyles';
import { Link, Element } from 'react-scroll'

// import { propType } from '../../App';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Values from '../Values/Values';
import Guarantee from '../Guarantee/Guarantee';
import Map from '../Map/Map';
import ContactUs from '../ContactUs/ContactUs';


const ElevationScroll = (props) =>{
  const { children, window } = props;

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

const Navbar = (props) => {

  // const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <ElevationScroll {...props}>
        <AppBar position="fixed">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="secondary"
            centered
          >
            <Link activeClass="active" to="welcome" spy={true} smooth={true} offset={-47} duration={500}>
              <Tab label="Inicio"/>
            </Link>

            <Link activeClass="active" to="services" spy={true} smooth={true} offset={-47} duration={500}>
              <Tab label="Servicios" />
            </Link>

            <Link activeClass="active" to="values" spy={true} smooth={true} offset={-47} duration={500}>
              <Tab label="Valores" />
            </Link>

            <Link activeClass="active" to="guarantee" spy={true} smooth={true} offset={-47} duration={500}>
              <Tab label="Garantía" />
            </Link>

            <Link activeClass="active" to="map" spy={true} smooth={true} offset={-47} duration={500}>
              <Tab label="Ubicación" />
            </Link>

            <Link activeClass="active" to="contactus" spy={true} smooth={true} offset={-47} duration={500}>
              <Tab label="Contactanos" />
            </Link>
          </Tabs>
        </AppBar>
      </ElevationScroll>
      
        <Element name="welcome" className="element">
          <Header id="header" />
        </Element>

        <Element name="services" className="element">
          <Services />
        </Element>

        <Element name="values" className="element">
          <Values />
        </Element>

        <Element name="guarantee" className="element">
          <Guarantee />
        </Element>

        <Element name="map" className="element">
          <Map location={location} zoomLevel={17} />
        </Element>

        <Element name="contactus" className="element">
          <ContactUs/>
        </Element>
      
    </>
  )
}

export default Navbar