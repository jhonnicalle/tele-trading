import { Button, Paper, Snackbar, TextField, Typography } from '@material-ui/core'
import { Clear, Send } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import { useStyles } from '../ContactUsStyles'
import emailjs from 'emailjs-com';
import MuiAlert from '@material-ui/lab/Alert';

const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const ContactForm = () => {
  // Variables to form
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  // Error empty variables
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [subjectError, setSubjectError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  // Error wrone variables
  const [nameWarning, setNameWarning] = useState(false);
  const [emailWarning, setEmailWarning] = useState(false);
  const [subjectWarning, setSubjectWarning] = useState(false);
  const [messageWarning, setMessageWarning] = useState(false);

  // Varialbles to snackbars
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openFailure, setOpenFailure] = useState(false);

  const [submit, setSubmit] = useState(false)

  const classes = useStyles()

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

  const checkEmpty = () => {
    if(name.length === 0) {
      setNameError(true)
      setNameWarning('El campo no puede estar vacío')
    } else if (name.length > 0 && name.length <= 5) {
      setNameError(true)
      setNameWarning('Debe haber mas de 5 caracteres')
    } else {
      setNameError(false)
      setNameWarning('')
    }

    if (email.length === 0) {
      setEmailError(true)
      setEmailWarning('El campo no puede estar vacío')
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError(true)
      setEmailWarning('Correo no valido')
    } else {
      setEmailError(false)
      setEmailWarning('')
    }

    if(subject.length === 0) {
      setSubjectError(true)
      setSubjectWarning('El campo no puede estar vacío')
    } else {
      setSubjectError(false)
      setSubjectWarning('')
    }

    if(message.length === 0) {
      setMessageError(true)
      setMessageWarning('El campo no puede estar vacío')
    } else {
      setMessageError(false)
      setMessageWarning('')
    }
  }

  const handleSubmit = e => {
    e.preventDefault()

    setSubmit(true)

    checkEmpty()
  }

  const sendEmail = () => {
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
      onHandleReset()
    })
    .catch(error =>
      setOpenFailure(true)
    )
  }

  const nameChange = (e) => {
    if(e.target.value.match("^[a-zA-Z ]*$")!=null) {
      setName(e.target.value)
    }
  }

  const onHandleReset = () => {
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  }

  // Comentario importante

  // Este formulario se me hizo en particular un poco complicado validar y enviar la peticion debido a que
  // realizaba la solicitud cuando hacia click para enviar el formulario, pero los datos no se actualizaban
  // en el momento debido a que en el metodo handleSubmit() yo hacia la evaluación de los campos 
  // e inmediatamente hacia la evaluación de los mismos campos para ver si hacía la solicitud, pero lo que 
  // sucedía era que con el useState, a la hora de hacer la actualizacion de la variable, el metodo es asincrono
  // por lo que se actualizaban cuando se volvia a actualizar el componente, por lo que tuve que hacer primero la 
  // actualización de datos cuando enviaba el formulario y luego con useEffect() evaluaba y enviaba la solicitud en dado caso de 
  // que los campos esten llenos de la manera correcta.

  useEffect(() => {
    if(submit) {
      if(!nameError && !emailError && !subjectError && !messageError){
        sendEmail()
      }
      setSubmit(false)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [submit])

  return (
    <Paper className={classes.paper}>
      <form
        onSubmit={handleSubmit}
      >
        <Typography variant="h4" align='center' className={classes.titleContact}>
          CONSULTA
        </Typography>
        <Typography className={classes.input} variant="body1" gutterBottom>
          Si tiene alguna duda ¡no dude en escribirnos!
        </Typography>
        <TextField name='name' value={name} onChange={nameChange} error={nameError} size='small' className={classes.input} id="outlined-basic" label="Nombre y apellido" helperText={nameWarning} variant="outlined" fullWidth/>
        <TextField name='email' value={email} onChange={e => setEmail(e.target.value)} error={emailError} size='small' className={classes.input} id="outlined-basic" label="Correo electrónico" helperText={emailWarning} variant="outlined" fullWidth/>
        <TextField name='subject' value={subject} onChange={e => setSubject(e.target.value)} error={subjectError} size='small' className={classes.input} id="outlined-basic" label="Asunto" helperText={subjectWarning} variant="outlined" fullWidth/>
        <TextField
          name='message'
          value={message}
          onChange={e => setMessage(e.target.value)}
          error={messageError}
          helperText={messageWarning}
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
          variant="contained"
          size="large"
          color="secondary"
          className={classes.button}
          endIcon={<Clear />}
        >
          LIMPIAR
        </Button>
        <Button
          type='submit'
          variant="contained"
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