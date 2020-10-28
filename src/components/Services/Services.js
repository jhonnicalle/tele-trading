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
        <Grid item sm={false} md={6} lg={6}>
          <img className='image-values' src={image} alt='Imagen de servicios' />
        </Grid>
        <Grid item  md={6} lg={6}>
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
      {/* <Container>
        <Typography className={classes.bigTitle} variant="h3" align='center'>
          SERVICIOS
        </Typography>        
          
        <Typography className={classes.title}>
          NOS ESPECIALIZAMOS EN:
        </Typography>
        <Grid container>
          <Grid item xs={12} sm={6} md={3}>
            <Card elevation={0} className={classes.root} variant="outlined">
              <CardContent>
                <Typography className={classes.titleCard} color="textSecondary" gutterBottom>
                  1. BÚSQUEDA DE PRODUCTOS Y PROVEEDORES
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card className={classes.root} variant="outlined">
              <CardContent>
                <Typography className={classes.titleCard} color="textSecondary" gutterBottom>
                  2. ACOMPAÑAMIENTO EN LAS NEGOCIACIONES COMPRADORES, PROVEEDORES Y PRODUCTORES.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card className={classes.root} variant="outlined">
              <CardContent>
                <Typography className={classes.titleCard} color="textSecondary" gutterBottom>
                  3. CONTROL DE CALIDAD DE LOS PRODUCTOS.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card className={classes.root} variant="outlined">
              <CardContent>
                <Typography className={classes.titleCard} color="textSecondary" gutterBottom>
                  4. LOGÍSTICA INTERNACIONAL
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container> */}
    </div>
  )
}

export default Services