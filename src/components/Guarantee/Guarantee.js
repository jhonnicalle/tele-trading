import React, { createRef } from 'react'
import { Container, Grid, Paper, Typography } from '@material-ui/core'
import './Guarantee.css'
import { useStyles } from './GuaranteeStyles'
import image from '../../images/SERVICES IMAGE.jpg'
import Carousel from 'react-material-ui-carousel'
import Fade from 'react-reveal/Fade'

const Guarantee = () => {
  const classes = useStyles()

  const wraper = createRef()
  
  const items = [
    {
      description: `Como la industria es un campo extremadamente sensible, cuyos estándares de seguridad y
      confianza son de vital importancia, y cada país es más exigente día a día, el control de calidad
      debe garantizarse diariamente mediantes políticas, estrategias y medidas eficientes en cada
      productor.`
    },
    {
      description: `Nuestros clientes tendrán la seguridad de que cada uno de nuestros fabricantes posee el
      compromiso de garantizar el mejor producto. Por ello, el proceso de control de calidad
      comienza justamente en la cuidadosa selección del productor, cuyos estándares de calidad
      deben ser más exigentes que los de la media.`
    },
    {
      description: `En este estricto y continuo proceso que abarca la búsqueda del producto adecuado, el
      fabricante idóneo, nuestra empresa está comprometida y exige a sus proveedores que todos
      sus productos cumplan con los estándares de calidad exigidos y que sean
      homologables en cada País de destino. Se realizan las pruebas, se analiza todo el proceso para
      que nuestro cliente final sea empresa o particular se le pueda asegurar la calidad y la seguridad
      del producto.`
    },
    {
      description: `Podemos ofrecer a nuestros clientes productos prácticamente en toda Europa,
      especializándonos en los países de la Península Ibérica, España y Portugal, prestando el
      servicio en todo el proceso de internacionalización. Negociamos en todos
      los términos Incoterm y prestamos el asesoramiento necesario para que el producto esté a
      disposición del cliente.`
    }
  ]

  return (
    <div className='background-screen-guarantee'>
      <Container>
      <Fade bottom>
      <Grid container>
        <Grid className='image-guarantee' item xs={true} sm={true} md={6} lg={6}>
          <img src={image} alt='Imagen de servicios' />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Typography className={classes.titleGuarantee} variant='h4' align='center'>
            GARANTIA DE CALIDAD
          </Typography>
          <Grid className={classes.card} container>
            <Grid item xs={12}>
              <Carousel
                className={classes.carousel}
                animation="fade"
                interval={12000}
              >
                {
                  items.map( (item, i) => (
                    <Paper elevation={2} className={classes.paper} key={i}>
                      <Grid container
                        direction="row"
                        justify="center"
                        alignItems="center" 
                        spacing={1}
                        style={{height: "100%"}}
                      >
                        <Grid item xs={12} sm={12}>
                          {/* <Typography ref={wraper} className={classes.paragraph}>{item.description}</Typography> */}
                          <p ref={wraper} className={classes.paragraph}>{item.description}</p>
                        </Grid>
                      </Grid>
                    </Paper>
                  ))
                }
              </Carousel>
            </Grid>
          </Grid>
        </Grid>
        
      </Grid>
      </Fade>
      </Container>
    </div>
  )
}

export default Guarantee