import {
  Button, 
  Grid, 
  MobileStepper, 
  Paper, 
  Typography, 
  useTheme 
} from '@material-ui/core';
import { 
  KeyboardArrowLeft,
  KeyboardArrowRight 
} from '@material-ui/icons';
import React from 'react';
import { useStyles } from './ValuesStyles';
import './Values.css';
import image from '../../images/VALUES IMAGE.jpg'

// const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const value = [
  {
    title: 'PROFESIONALIDAD',
    content: `Somos y vivimos nuestro negocio. Creamos lazos con compañías basadas
     en el respeto, la honestidad y la profesionalidad de quienes han tenido 
     la iniciativa de crear esta empresa.`
  },
  {
    title: 'RESPONSABILIDAD',
    content: `Estamos concienciados, con orgullo, tenemos la convicción firme que con nuestro trabajo
    incentivamos y aceleramos, la construcción de lazos comerciales y personales que a futuro
    serán sostenidos y sostenibles, local y globalmente. Para nosotros, para nuestros clientes y
    para todas las personas a las cuales ayudamos a incentivar su actividad profesional en el
    exterior.`,
  },
  {
    title: 'REINVENCIÓN',
    content: `Crecemos con cada oportunidad, La agilidad con la que respondemos a los desafíos nos
    permite explorar nuevos caminos y ambicionar nuevas oportunidades todos los días. Creemos
    en la autodisciplina y en las capacidades de las personas que desean crear, innovar, comerciar
    emprender. `,
  },
  {
    title: 'INSPIRACIÓN',
    content: `Avanzamos juntos, Progresamos juntos , tenemos la determinación que si tenemos la
    intensión y la dirección adecuada en la búsqueda de nuevos paradigmas con muchas
    preguntas y algunas respuestas, instando a todos a que nos acompañen, caminando a nuestro
    lado.`,
  },
  {
    title: 'CONOCIMIENTO',
    content: `Sabemos lo que hacemos, Seguimos profundizando en conocimiento de toda la cadena de
    valor para impulsar la evolución y la diferenciación en nuestros procesos y servicios.`,    
  },
];

const Values = () => {
  const classes = useStyles()
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = value.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

 

  return (
    <div className="background-screen-values">
      <Grid container>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Typography className={classes.bigTitle} variant='h3' align='center'>
            VALORES
          </Typography>
          <div className={classes.root}>
            <Paper square elevation={0} className={classes.titleCard}>
              <Typography align='center' variant='h5'>{value[activeStep].title}</Typography>
            </Paper>         
            <Paper square elevation={0} className={classes.header}>
              <Typography paragraph>{value[activeStep].content}</Typography>
            </Paper>            
            <MobileStepper
              variant="progress"
              steps={maxSteps}
              position="static"
              activeStep={activeStep}
              className={classes.root}
              nextButton={
                <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                  {/* Siguiente */}
                  {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                </Button>
              }
              backButton={
                <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                  {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                  {/* Anterior */}
                </Button>
              }
            />
          </div>
        </Grid>
        <Grid item xs={true} sm={true} md={6} lg={6}>
          <img className='image-values' src={image} alt='Imagen de valores' />
        </Grid>
      </Grid>
    </div>
  )
}

export default Values