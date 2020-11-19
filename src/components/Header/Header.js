import React from 'react';
import { Container, Grid } from '@material-ui/core';
import './Header.css';
import { useStyles } from './HeaderStyles';
import logo from '../../images/logo T-01.png';

const Header = () => {
  const classes = useStyles()
  return (
    <div className='background-screen-header'>
      <div className='transparent-background-header'>
        <Container>
          <Grid container className={classes.root} justify="center" alignItems="center">
            <Grid item className={classes.paper} xs={12} sm={4} >
              <img className='logo2' src={logo} alt='Logo de la empresa' />
            </Grid>
            <Grid item className={classes.paper} xs={12} sm={8} >
              <div className="home-info">
                <h1 className="title">TELE-TRADING</h1>
                <p>
                  Somos tu aliado de negocios en España, Portugal y China Contamos con la experiencia,
                  acompañando a nuestros clientes en el proceso de optimización de manufacturación, compras
                  y logísticas en La Península Ibérica, contamos con socios estratégicos en China, contribuyendo
                  en el desarrollo de productos de calidad, precios competitivos, valores agregados y novedosas
                  estrategias comerciales, dando como resultado la satisfacción de un negocio rentable a todos
                  nuestros clientes. 
                  </p>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
    
  )
}

export default Header