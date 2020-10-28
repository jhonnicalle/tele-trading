import { Divider, Grid, Paper, Typography } from '@material-ui/core'
import React from 'react'
import { useStyles } from '../ContactUsStyles'

const ContactDetails = () => {
  const classes = useStyles()

  return (
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
  )
}

export default ContactDetails