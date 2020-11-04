import React from 'react';
import { Container, Grid,  Typography } from '@material-ui/core';
import './ContactUs.css';
import { useStyles } from './ContactUsStyles';
import ContactForm from './ContactForm/ContactForm';
import ContactDetails from './ContactDetails/ContactDetails';

const ContactUs = () => {
  const classes = useStyles()
  return (
    <div className='background-screen-contactus'>
      <div className='transparent-backgrund-contactus'>
        <Container>
          <Typography variant="h4" align='center' className={classes.titleContact}>
            CONTACTANOS
          </Typography>
          <Grid container alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={6} >
              <ContactDetails />
            </Grid>
            <Grid item xs={12} sm={6}>              
              <ContactForm />              
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  )
}

export default ContactUs