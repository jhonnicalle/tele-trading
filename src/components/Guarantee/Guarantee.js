import React from 'react'
import { Grid, Paper, Typography } from '@material-ui/core'
import './Guarantee.css'
import { useStyles } from './GuaranteeStyles'
import image from '../../images/SERVICES IMAGE.jpg'
import Carousel from 'react-material-ui-carousel'

const Guarantee = () => {
  const classes = useStyles()

  const items = [
    {
      description: `Como la industria es un campo extremadamente sensible, cuyos estándares de seguridad y
      confianza son de vital importancia, y cada país es más exigente día a día, el control de calidad
      debe garantizarse diariamente mediantes políticas, estrategias y medidas eficientes en cada
      productor.`
    },
    {
      description: `Nuestros clientes tienen la seguridad de que cada uno de nuestros fabricantes tiene el
      compromiso de garantizar el mejor producto. Por ello, el proceso de control de calidad
      comienza justamente en la cuidadosa selección del productor, cuyos estándares de calidad
      deben ser más exigentes que los de la media.`
    },
    {
      description: `En este estricto y continuo proceso que abarca la búsqueda del producto adecuado, el
      fabricante idóneo, nuestra empresa está comprometida y exige a sus proveedores que todos
      sus productos cumplan con los estándares de calidad exigidos para la QUE, y que sean
      homologables en cada País de destino. Se realizan las pruebas, se analiza todo el proceso para
      que nuestro cliente final sea empresa o particular se le pueda asegurar la calidad y la seguridad
      del producto.`
    },
    {
      description: `Podemos ofrecer a nuestros clientes productos prácticamente de toda Europa,
      Especializándonos en los países de la Península Ibérica, España y Portugal, prestando el
      servicio en todo el proceso de internacionalización. Podemos negociar prácticamente en todos
      los términos Incoterm y prestar el asesoramiento necesario para que el producto esté en
      disposición del cliente.`
    }
  ]

  return (
    <div className='background-screen-guarantee'>
      <Grid container>
        <Grid item xs={true} sm={true} md={6} lg={6}>
          <img className='image-services' src={image} alt='Imagen de servicios' />
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
                interval={15000}
              >
                {
                  items.map( (item, i) => (
                    <Paper elevation={0} className={classes.paper} key={i}>
                      <Typography className={classes.paragraph}>{item.description}</Typography>
                    </Paper>
                  ))
                }
              </Carousel>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default Guarantee