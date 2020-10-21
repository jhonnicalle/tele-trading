import React from 'react'
import { Button, Container, Divider, Grid, Paper, TextField, Typography } from '@material-ui/core'
import { Send } from '@material-ui/icons';
import './ContactUs.css'
import { useStyles } from './ContactUsStyles'

const ContactUs = () => {
  const classes = useStyles()
  return (
    <div className='background-screen-contactus'>
      <div className='transparent-backgrund-contactus'>
        <Container>
          <Typography variant="h3" align='center' className={classes.titleContact}>
            CONTACTANOS
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} >
              <Paper className={classes.paper}>
                <Grid item xs={12}>
                  <Typography variant="h5" align='center' className={classes.titleContact}>
                    CORREO ELECTRÓNICO
                  </Typography>
                  <Typography variant="body1" align='center' gutterBottom>
                    admin@tele-trading.com
                  </Typography>
                </Grid>
               
                <Divider />
                <Typography variant="h5" align='center' className={classes.titleContact}>
                  TELÉFONO
                </Typography>
                <Typography variant="body1" align='center' gutterBottom>
                  +34 642 270296
                </Typography>
                <Divider />
                <Typography variant="h5" align='center' className={classes.titleContact}>
                  DIRECCIÓN
                </Typography>
                <Typography variant="body1" align='center' gutterBottom>
                  Calle General Vara de Rey 26, Logroño, La Rioja. CP26002, España
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>
                <Typography variant="h4" align='center' className={classes.titleContact}>
                  CONSULTA
                </Typography>
                <Typography className={classes.input} variant="body1" gutterBottom>
                  Si tienes alguna duda, escribenos!
                </Typography>
                <TextField className={classes.input} id="outlined-basic" label="Nombre y apellido" variant="outlined" fullWidth/>
                <TextField className={classes.input} id="outlined-basic" label="Correo electrónico" variant="outlined" fullWidth/>
                <TextField
                  className={classes.input}
                  id="outlined-multiline-static"
                  label="Mensaje"
                  multiline
                  rows={8}                  
                  variant="outlined"
                  fullWidth
                />
                <Button
                  variant="outlined"
                  size="large"
                  color="primary"
                  className={classes.button}
                  endIcon={<Send />}
                >
                  ENVIAR
                </Button>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  )
}

export default ContactUs