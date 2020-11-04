import { Button, Paper, Snackbar, TextField, Typography } from '@material-ui/core'
import { Clear, Send } from '@material-ui/icons'
import React, { useState } from 'react'
import { useStyles } from '../ContactUsStyles'
import emailjs from 'emailjs-com';
import MuiAlert from '@material-ui/lab/Alert';

const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const ContactForm = () => {
  // Variables to form  

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const [openSuccess, setOpenSuccess] = React.useState(false);
  const [openFailure, setOpenFailure] = React.useState(false);

  const classes = useStyles()

  const handleClick = () => {
    
  };

  const handleCloseSuccess = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSuccess(false);
  };

  const handleCloseFailure = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenFailure(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault()

    const templateParams = {
      name: name,
      email: email,
      subject: subject,
      message: message,
    }

    emailjs.send(
      'service_sy3fxr8',
      'template_76horm7',
      templateParams,
      'user_oOgbZVIXAW5Dp839vWzUv'
    )
    .then(res => {
      setOpenSuccess(true)
    })
    .catch(error =>
      setOpenFailure(true)
    )

    onHandleReset()
    
  }

  const nameChange = (e) => {
    if(e.target.value.match("^[a-zA-Z ]*$")!=null) {
      e.preventDefault()
      setName(e.target.value)
      console.log(name)
    }
  }

  const emailChange = (e) => {
    
      e.preventDefault()
      setEmail(e.target.value)
      console.log(email)
    
  }

  const subjectChange = (e) => {
    e.preventDefault()
    setSubject(e.target.value)
    console.log(subject)    
  }

  const messageChange = (e) => {
    e.preventDefault()
    setMessage(e.target.value)
    console.log(message)
  }

  const handleValidation = () => {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    //Name
    if(!fields["name"]){
       formIsValid = false;
       errors["name"] = "Cannot be empty";
    }

    if(typeof fields["name"] !== "undefined"){
       if(!fields["name"].match(/^[a-zA-Z]+$/)){
          formIsValid = false;
          errors["name"] = "Only letters";
       }        
    }
                                                                                                               
    //Email
    if(!fields["email"]){
       formIsValid = false;
       errors["email"] = "Cannot be empty";
    }

    if(typeof fields["email"] !== "undefined"){
       let lastAtPos = fields["email"].lastIndexOf('@');
       let lastDotPos = fields["email"].lastIndexOf('.');

       if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') === -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
          formIsValid = false;
          errors["email"] = "Email is not valid";
        }
    }  

    this.setState({errors: errors});
    return formIsValid;
  }

  const onHandleReset = () => {
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  }


  return (
    <Paper className={classes.paper}>
      <form method='POST' onSubmit={handleSubmit}>
        <Typography variant="h4" align='center' className={classes.titleContact}>
          CONSULTA
        </Typography>
        <Typography className={classes.input} variant="body1" gutterBottom>
          Si tienes alguna duda, escribenos!
        </Typography>
        <TextField name='name' value={name} onChange={nameChange} size='small' className={classes.input} id="outlined-basic" label="Nombre y apellido" variant="outlined" fullWidth/>
        <TextField name='email' value={email} onChange={emailChange} size='small' className={classes.input} id="outlined-basic" label="Correo electrónico" variant="outlined" fullWidth/>
        <TextField name='subject' value={subject} onChange={subjectChange} size='small' className={classes.input} id="outlined-basic" label="Asunto" variant="outlined" fullWidth/>
        <TextField
          name='message' 
          value={message}
          onChange={messageChange}
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
          onClick={onHandleReset}
          variant="outlined"
          size="large"
          color="secondary"
          className={classes.button}
          endIcon={<Clear />}
        >
          LIMPIAR
        </Button>
        <Button
          type='submit'
          variant="outlined"
          size="large"
          color="primary"
          className={classes.button}
          endIcon={<Send />}
        >
          ENVIAR
        </Button>
      </form>
      <Snackbar open={openSuccess} autoHideDuration={6000} onClose={handleCloseSuccess}>
        <Alert onClose={handleCloseSuccess} severity="success">
          ¡El mensaje ha sido enviado de manera exitosa!
        </Alert>
      </Snackbar>
      <Snackbar open={openFailure} autoHideDuration={6000} onClose={handleCloseFailure}>
        <Alert onClose={handleCloseFailure} severity="error">
          Ha ocurrido un error, intertelo de nuevo más tarde
        </Alert>
      </Snackbar>
    </Paper>
  )
}

export default ContactForm