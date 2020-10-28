import React from 'react'
import { Container, Typography } from '@material-ui/core'
import './Guarantee.css'

const Guarantee = () => {
  return (
    <div className='background-screen-guarantee'>
      <Container maxWidth='md'>
        <Typography variant="h3" align='center' gutterBottom>
          GARANTIA DE CALIDAD
        </Typography>
        <Typography paragraph variant="body1">
          Como la industria es un campo extremadamente sensible, cuyos estándares de seguridad y
          confianza son de vital importancia, y cada país es más exigente día a día, el control de calidad
          debe garantizarse diariamente mediantes políticas, estrategias y medidas eficientes en cada
          productor. 
        </Typography>
        <Typography paragraph variant="body1">
          Nuestros clientes tienen la seguridad de que cada uno de nuestros fabricantes tiene el
          compromiso de garantizar el mejor producto. Por ello, el proceso de control de calidad
          comienza justamente en la cuidadosa selección del productor, cuyos estándares de calidad
          deben ser más exigentes que los de la media. 
        </Typography>
        <Typography paragraph variant="body1">
          En este estricto y continuo proceso que abarca la búsqueda del producto adecuado, el
          fabricante idóneo, nuestra empresa está comprometida y exige a sus proveedores que todos
          sus productos cumplan con los estándares de calidad exigidos para la QUE, y que sean
          homologables en cada País de destino. Se realizan las pruebas, se analiza todo el proceso para
          que nuestro cliente final sea empresa o particular se le pueda asegurar la calidad y la seguridad
          del producto. 
        </Typography>
        <Typography variant="body1">
          Podemos ofrecer a nuestros clientes productos prácticamente de toda Europa,
          Especializándonos en los países de la Península Ibérica, España y Portugal, prestando el
          servicio en todo el proceso de internacionalización. Podemos negociar prácticamente en todos
          los términos Incoterm y prestar el asesoramiento necesario para que el producto esté en
          disposición del cliente. 
        </Typography>
      </Container>
    </div>
  )
}

export default Guarantee