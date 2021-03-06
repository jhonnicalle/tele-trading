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
        <Grid className='image-services' item xs={true} sm={5} md={5} lg={5}>
          <img src={image} alt='Imagen de servicios' />
        </Grid>
        <Grid item xs={12} sm={7} md={7} lg={7}>
          <Typography className={classes.bigTitle} variant='h4' align='center'>
            SERVICIOS
          </Typography>
          <Grid className={classes.card} container>
            <Grid item xs={12} >
              <Paper square elevation={0} className={classes.paper}>
                <Typography>Búsqueda de productos y proveedores.</Typography>
              </Paper> 
            </Grid>
            <Grid item xs={12} >
              <Paper square elevation={0} className={classes.paper}>
                <Typography>Acompañamiento en las negociaciones, compradores, proveedores y productores.</Typography>
              </Paper> 
            </Grid>
            <Grid item xs={12} >
              <Paper square elevation={0} className={classes.paper}>
                <Typography>Control de calidad de los productos.</Typography>
              </Paper> 
            </Grid>
            <Grid item xs={12} >
              <Paper square elevation={0} className={classes.paper}>
                <Typography>Logística internacional</Typography>
              </Paper> 
            </Grid>
          </Grid>         
        </Grid>        
      </Grid>      
    </div>
  )
}

export default Services