import { Container, Divider, Grid, List, ListItem, ListItemText, Paper, Typography } from '@material-ui/core'
import React from 'react'
import { useStyles } from './ServicesStyles'
import './Services.css'

const Services = () => {
  const classes = useStyles()
  return (
    <div className='background-screen-services'>
      <Container>
        
        <Typography variant="h2" align='center' gutterBottom>
          SERVICIOS
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" className={classes.title}>
              Nos especializamos en: 
            </Typography>
            <div className={classes.card}>
              <List>              
                <ListItem>
                  <ListItemText primary="1. BÚSQUEDA DE PRODUCTOS Y PROVEEDORES" />
                </ListItem>
                <Divider className={classes.divider}/>
                <ListItem>
                  <ListItemText primary="2. ACOMPAÑAMIENTO EN LAS NEGOCIACIONES COMPRADORES, PROVEEDORES Y PRODUCTORES. " />
                </ListItem>
                <Divider className={classes.divider}/>
                <ListItem>
                  <ListItemText primary="3. CONTROL DE CALIDAD DE LOS PRODUCTOS." />
                </ListItem>
                <Divider className={classes.divider}/>
                <ListItem>
                  <ListItemText primary="4. LOGÍSTICA INTERNACIONAL" />
                </ListItem>
              </List>
            </div>
          </Grid>          
          <Grid item xs={12} sm={8}>
            <Paper className={classes.paper}>

            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Services