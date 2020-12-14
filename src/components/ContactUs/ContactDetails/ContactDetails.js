import { Divider, Grid, Paper, Typography } from '@material-ui/core'
import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { useStyles } from '../ContactUsStyles'

const ContactDetails = () => {
  const classes = useStyles()

  const items = [
    {
      email: 'admin@tele-trading.com',
      cellphone: '+34 642 270296',
      address: 'Calle General Vara de Rey 26, Logroño, La Rioja. CP26002, España'
    },
    {
      email: 'admin@tele-trading.com',
      cellphone: '+1 786 3503989',
      address: '1489 SE 17TH ST STE 2J FT LAUDERDALE FL 33316- 1714'
    }
  ]

  return (
    <Paper className={classes.paper}>
      <Grid item xs={12}>
        <Carousel
          className={classes.carousel}
          animation="fade"
          interval={15000}
        >
          {
            items.map( (item, i) => (
              <Paper elevation={2} className={classes.paperInfo} key={i}>
                <Typography variant="h5" align='center' className={classes.titleContact}>
                  CORREO ELECTRÓNICO
                </Typography>
                <Typography variant="body1" align='center' gutterBottom>
                  {item.email}
                </Typography>
                <Divider />
                <Typography variant="h5" align='center' className={classes.titleContact}>
                  TELÉFONO
                </Typography>
                <Typography variant="body1" align='center' gutterBottom>
                  {item.cellphone}
                </Typography>
                <Divider />
                <Typography variant="h5" align='center' className={classes.titleContact}>
                  DIRECCIÓN
                </Typography>
                <Typography variant="body1" align='center' gutterBottom>
                  {item.address}
                </Typography>
              </Paper>
            ))
          }
        </Carousel>
      {/* <Typography variant="h5" align='center' className={classes.titleContact}>
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
      </Typography> */}
      </Grid>
    </Paper>
  )
}

export default ContactDetails