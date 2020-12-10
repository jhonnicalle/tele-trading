import React, { useEffect, useState } from 'react'
import { Link, Element } from 'react-scroll'
import Header from '../Header/Header';
// import Services from '../Services/Services';
import Values from '../Values/Values';
import Guarantee from '../Guarantee/Guarantee';
import Map from '../Map/Map';
import ContactUs from '../ContactUs/ContactUs';
import {MenuItems} from './MenuItems';
import './Navbar.css'
import logo from '../../images/logo-navbar.png'

import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import Services2 from '../Services/Services2';


const location = {
  address: 'Calle Gral. Vara de Rey, 26, 26002 Logroño, La Rioja',
  lat: 42.461729,
  lng: -2.445833,
}

const Navbar2 = () => {

  const [clicked, setCliked] = useState(false)

  const widthScreen = window.innerWidth;

  useEffect(() => {
    if (clicked && widthScreen <= 900) document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    }
  })

  return (
    <>
      <nav className="NavbarItems">
        <h1 className="navbar-logo">
          <img className='logo' src={logo} alt={'LOGO'} />
        </h1>
        <div className="menu-icon" onClick={() => setCliked(!clicked)}>
          <i>{clicked ? <CloseRoundedIcon style={{color: 'white'}} /> : <MenuRoundedIcon style={{color: 'white'}} />}</i>
        </div>
        <ul className={clicked ? 'nav-menu active' : 'nav-menu'} >
          {MenuItems.map((item, index) => (
            <Link key={index} activeClass="active" to={item.to} spy={true} smooth={true} offset={widthScreen <= 900 ? -47 : -77} duration={500}>
              <li className={item.cName} onClick={() => setCliked(!clicked)}>
                {/* <a className={item.cName} href='' onClick={() => setCliked(!clicked)}> */}
                  {item.title}
                {/* </a> */}
              </li>
            </Link>
          ))}
        </ul>
      </nav>
      <Element name="welcome" className="element">
        <Header id="header" />
      </Element>
      <Element name="services" className="element">
        <Services2 />
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

export default Navbar2