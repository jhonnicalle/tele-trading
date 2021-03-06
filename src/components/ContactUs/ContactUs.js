import React from 'react';
import { Container, Grid,  Typography } from '@material-ui/core';
import './ContactUs.css';
import { useStyles } from './ContactUsStyles';
import ContactForm from './ContactForm/ContactForm';
// import ContactForm from './ContactForm/ContactForm2';
import ContactDetails from './ContactDetails/ContactDetails';
import Fade from 'react-reveal/Fade'

const ContactUs = () => {
  const classes = useStyles()
  return (
    <div className='background-screen-contactus' id="contactus">
      <div className='transparent-backgrund-contactus'>
        <Container>
        <Fade bottom>
          <Typography variant="h4" align='center' className={classes.titleContact}>
            CONTACTANOS
          </Typography>
          <Grid container className={classes.grid} alignItems="stretch" spacing={3}>
            <Grid item className={classes.gridItem} xs={12} sm={6} >
              <ContactDetails />
            </Grid>
            <Grid item className={classes.gridItem} xs={12} sm={6}>              
              <ContactForm />              
            </Grid>
          </Grid>
        </Fade>

        </Container>
      </div>
    </div>
  )
}

export default ContactUs