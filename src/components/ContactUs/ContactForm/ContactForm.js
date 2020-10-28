import { Button, Paper, TextField, Typography } from '@material-ui/core'
import { Cancel, Send } from '@material-ui/icons'
import React from 'react'
import { useStyles } from '../ContactUsStyles'


const ContactForm = () => {

  const classes = useStyles()

  const handleSubmit = () => {

  }

  return (
    <Paper className={classes.paper}>
      <form onSubmit={handleSubmit}>
        <Typography variant="h4" align='center' className={classes.titleContact}>
          CONSULTA
        </Typography>
        <Typography className={classes.input} variant="body1" gutterBottom>
          Si tienes alguna duda, escribenos!
        </Typography>
        <TextField size='small' className={classes.input} id="outlined-basic" label="Nombre y apellido" variant="outlined" fullWidth/>
        <TextField size='small' className={classes.input} id="outlined-basic" label="Correo electrónico" variant="outlined" fullWidth/>
        <TextField
          size='small' 
          className={classes.input}
          id="outlined-multiline-static"
          label="Mensaje"
          multiline
          rows={5}                  
          variant="outlined"
          fullWidth
        />
        <Button
          variant="outlined"
          size="large"
          color="secondary"
          className={classes.button}
          endIcon={<Cancel />}
        >
          CANCELAR
        </Button>
        <Button
          variant="outlined"
          size="large"
          color="primary"
          className={classes.button}
          endIcon={<Send />}
        >
          ENVIAR
        </Button>
      </form>
    </Paper>
  )
}

export default ContactForm