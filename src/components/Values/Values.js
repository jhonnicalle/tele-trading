import {
  Grid,
  Paper,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { useStyles } from './ValuesStyles';
import './Values.css';
import image from '../../images/VALUES IMAGE.jpg'
import Carousel from 'react-material-ui-carousel';

const value = [
  {
    title: 'PROFESIONALIDAD',
    content: `Somos y vivimos nuestro negocio. Creamos lazos con compañías basadas
    en el respeto, la honestidad y la profesionalidad de quienes han tenido
    la iniciativa de crear esta empresa.`
  },
  {
    title: 'RESPONSABILIDAD',
    content: `Tenemos la firme convicción que con nuestro trabajo,
    incentivamos y aceleramos, la construcción de lazos comerciales y personales, sostenidos
    local y globalmente, para nosotros, nuestros clientes y
    todas las personas que ayudamos incentivando su actividad profesional en el exterior.`,
  },
  {
    title: 'REINVENCIÓN',
    content: `Crecemos con cada oportunidad, La agilidad con la que respondemos a los desafíos nos
    permite explorar nuevos caminos y ambicionar nuevas oportunidades todos los días. Creemos
    en la autodisciplina y en las capacidades de las personas que desean crear, innovar, comerciar
    y emprender.`,
  },
  {
    title: 'INSPIRACIÓN',
    content: `Avanzamos y progresamos juntos, tenemos determinación,
    intensión y la dirección adecuada en la búsqueda de nuevos paradigmas,
    instando a todos a que nos acompañen, caminando a nuestro lado.`,
  },
  {
    title: 'CONOCIMIENTO',
    content: `Sabemos lo que hacemos, Seguimos profundizando en conocimiento de toda la cadena de
    valor para impulsar la evolución y la diferenciación en nuestros procesos y servicios.`,
  },
];

const Values = () => {
  const classes = useStyles()

  return (
    <div className="background-screen-values">
      <Grid container>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Typography className={classes.bigTitle} variant='h4' align='center'>
            VALORES
          </Typography>
          <div className={classes.root}>
            <Carousel
                className={classes.carousel}
                animation="fade"
                interval={15000}
              >
                {
                  value.map( (item, i) => (
                    <Paper elevation={0} className={classes.paper} key={i}>
                      <Typography align='center' variant='h5' className={classes.paragraph}>{item.title}</Typography>
                      <Typography className={classes.paragraph}>{item.content}</Typography>
                    </Paper>
                  ))
                }
              </Carousel>
          </div>
        </Grid>
        <Grid className='image-values' item xs={true} sm={true} md={6} lg={6}>
          <img src={image} alt='Imagen de valores' />
        </Grid>
      </Grid>
    </div>
  )
}

export default Values