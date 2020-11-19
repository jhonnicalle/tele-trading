import {
  Grid,
  Paper,
  Typography
} from '@material-ui/core'
import React from 'react'
import { useStyles } from './ServicesStyles'
import './Services.css'
import image from '../../images/SERVICES IMAGE.jpg'

const Services = () => {
  const classes = useStyles()

  return (
    <div className='background-screen-services'>
      <Grid container>
        <Grid className='image-services' item xs={true} sm={6} md={6} lg={6}>
          <img src={image} alt='Imagen de servicios' />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Typography className={classes.bigTitle} variant='h3' align='center'>
            SERVICIOS
          </Typography>
          <Grid className={classes.card} container>
            <Grid item xs={12} >
              <Paper square elevation={0} className={classes.paper}>
                <Typography>BÚSQUEDA DE PRODUCTOS Y PROVEEDORES.</Typography>
              </Paper> 
            </Grid>
            <Grid item xs={12} >
              <Paper square elevation={0} className={classes.paper}>
                <Typography>ACOMPAÑAMIENTO EN LAS NEGOCIACIONES COMPRADORES, PROVEEDORES Y PRODUCTORES.</Typography>
              </Paper> 
            </Grid>
            <Grid item xs={12} >
              <Paper square elevation={0} className={classes.paper}>
                <Typography>CONTROL DE CALIDAD DE LOS PRODUCTOS.</Typography>
              </Paper> 
            </Grid>
            <Grid item xs={12} >
              <Paper square elevation={0} className={classes.paper}>
                <Typography>LOGÍSTICA INTERNACIONAL</Typography>
              </Paper> 
            </Grid>
          </Grid>         
        </Grid>        
      </Grid>      
    </div>
  )
}

export default Services