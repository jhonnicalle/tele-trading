import {
  Button,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography
} from '@material-ui/core'
import React from 'react'
import { useStyles } from './Services2Styles'
import './Services2.css'
import image from '../../images/logo BOX-01.png'
import { Check, ExitToApp } from '@material-ui/icons'
import Carousel from 'react-material-ui-carousel'

const Services2 = () => {
  
  const classes = useStyles()

  const teleTradingServices = [
    
    {
      card: {
        point1: `Intermediación comercial internacional, asesoría integral para importaciones y exportaciones., enfocado básicamente
        a países de Latinoamérica.`,
        point2: `Acompañamiento en las negociaciones con compradores, proveedores y productores.`,
      }
    },
    {
      card: {
        point1: `Búsqueda de nuevos proveedores. Soluciones integrales de internacionalización de los mercados de las PyMES y
        microPymes de provincias específicas de España con proyección de sus productos para mercadeo nacional e
        internacional.`,
        point2: `Compartir Catálogo de productos novedosos con calidades y precios competitivos, de Empresas y PYMES.`,
      }
    },
    {
      card: {
        point1: `Control de calidad de los productos ofertados.`,
        point2: `Servicio de compras y entregas en lugar de destino acordado.`,
        point3: `Servicio de compras y entregas en lugar de destino acordado.`,
      }
    }   
  ]

  const boxServices = [
    
    {
      card: {
        title: `BOX SERVICIOS INTERNACIONALES`,
        point1: `Consolidación y grupaje de contenedores para clientes FCL Y LCL: Recepción, consolidación y reparto para destinos
        hacia América Latina.`,
        point2: `Recogidas y entregas de mercancías sin límite de peso.`,
        point3: `Servicios especiales en Puertos, aeropuertos y polígonos.`,
      }
    },
    {
      card: {
        title: `BOX SERVICIOS INTERNACIONALES`,
        point1: `Distribución P2P, B2B y C2C en la UE.`,
        point2: `Servicio para empresas según la negociación de Incoterms.`,
        point3: `Acuerdos arancelarios como IVA en país destino en caso de negociación con Incoterms DDP.`,
      }
    },  
    {
      card: {
        title: `BOX SERVICIOS INTERNACIONALES`,
        point1: `Negociaremos con los 7 Incoterms Polivalentes utilizados en cualquier tipo de transporte: EXW, FCA, CPT, CIP, DAT,
        DAP y DDP.`,
        point2: `Negociaremos con 4 Incoterms exclusivos para transporte marítimo: FAS, FOB, CFR y CIF.`,
        point3: `Envíos nacionales e internacionales de mensajería urgente.`,
      }
    },
    {
      card: {
        title: `BOX ENVIOS COURIER`,
        point1: `Servicios Especiales: Repartos especiales de lotes, regalos de empresas, transporte de líquidos, etc. ofrece embalaje
        como valor añadido.`,
        point2: `Servicio Refrigerado para mercancías procedentes de América Latina hacia España.`,
        point3: `Servicio de Mudanzas y Guardamuebles internacional, con entrega y recogida a domicilio.`,
      }
    },
    {
      card: {
        title: `BOX ENVIOS COURIER`,
        point1: `Envío de muebles y electrodomésticos P2P: montaje y retirada de embalajes y retiro de unidades en desuso
        transportadas hacia centros de reciclaje.`,
        point2: `TUBOX: compras bajo el lema  ̈COMPRA EN CUALQUIER LUGAR Y NOSOTROS TE LO LLEVAMOS ́,  ̈COMPRAMOS POR
        TI ̈ ó  ̈COMPRAMOS POR ENCARGO ̈ en la UE o CHINA hacia determinados destinos de América Latina, productos
        tales como: casa e interiores, coches y repuestos, maquinaria y equipos, y electrónica.`,
        // point3: `Envíos nacionales e internacionales de mensajería urgente.`,
      }
    },
    {
      card: {
        title: `BOX ENVIOS COURIER`,
        point1: `Negociaremos con los 7 Incoterms Polivalentes utilizados en cualquier tipo de transporte: EXW, FCA, CPT, CIP, DAT,
        DAP y DDP.`,
        point2: `Negociaremos con 4 Incoterms exclusivos para transporte marítimo: FAS, FOB, CFR y CIF.`,
        point3: `Envíos nacionales e internacionales de mensajería urgente.`,
      }
    },
  ]

  return (
    <div className={'background-screen-services'} >
      <Container>
        <Typography className={classes.bigTitle} variant='h4' align='center'>
          SERVICIOS
        </Typography>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={12} md={5} lg={5}>
            <Typography className={classes.bigTitle} variant='h5' align='center'>
              SERVICIOS TELE-TRADING
            </Typography>
            <Typography variant='body1'>
              En Tele-Trading nos encargamos de que los servicios que ofrecemos sean de excelente calidad 
              y cubrir por completo todas las necesidades requeridas.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={7} lg={7}>
            <Grid className={classes.card} container>
              <Carousel
                className={classes.carousel}
                animation="fade"
                interval={1500000}
                navButtonsAlwaysInvisible
              >
                {
                  (teleTradingServices.map( (item, i) => (
                    <Paper elevation={2} className={classes.paperTeletrading} key={i}>
                      <Grid container
                        direction="row"
                        justify="center"
                        alignItems="center" 
                        spacing={1}
                        style={{height: "100%"}}
                      >
                      <List>
                        <ListItem>
                          <ListItemIcon>
                            <Check />
                          </ListItemIcon>
                          <ListItemText disableTypography>
                            {item.card.point1}
                          </ListItemText>
                        </ListItem>
                        {item.card.point2 && (
                        <ListItem>
                          <ListItemIcon>
                            <Check />
                          </ListItemIcon>
                          <ListItemText disableTypography>
                            {item.card.point2}
                          </ListItemText>
                        </ListItem>
                        )} 
                        {item.card.point3 && (
                          <ListItem>
                          <ListItemIcon>
                            <Check />
                          </ListItemIcon>
                          <ListItemText disableTypography>
                            {item.card.point3}
                          </ListItemText>
                        </ListItem>
                        )}
                      </List>
                      </Grid>
                    </Paper>
                  )))
                }
              </Carousel>
            </Grid>         
          </Grid>        
        </Grid>
        <Divider />
        <Grid container spacing={1}>
          <Grid item xs={12} sm={12} md={5} lg={5}>
            <Typography className={classes.bigTitle} variant='h5' align='center'>
              SERVICIOS BOX
            </Typography>
            <Typography variant='body1'>
              Box es una empresa aliada a Tele-Trading el cual ofrece una variedad de servicios
            </Typography>
            <Grid container
            direction="row"
            justify="center"
            alignItems="center" 
            spacing={1}>
              <Grid className='image-services' item xs={6} sm={6} md={6} lg={6}>
                <img src={image} alt='Imagen de servicios' />
              </Grid>
              <Grid className='image-services' item xs={6} sm={6} md={6} lg={6} alignItems="center">
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.button}
                  startIcon={<ExitToApp />}
                >
                  Visitanos
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={7} lg={7}>
            {/* <Grid className={classes.card} container > */}
              <Carousel
                className={classes.carousel}
                animation="fade"
                interval={1500000}
                navButtonsAlwaysInvisible
              >
                {
                  boxServices.map( (item, i) => (
                    <Paper elevation={2} className={classes.paperBox} key={i}>
                      <Grid container
                        direction="row"
                        justify="center"
                        alignItems="center" 
                        spacing={1}
                        style={{height: "100%"}}
                      >
                        <Typography variant='h5' align='center'>{item.card.title}</Typography>
                        <Grid item xs={12} sm={12}>
                        <List>
                          <ListItem>
                            <ListItemIcon>
                              <Check />
                            </ListItemIcon>
                            <ListItemText disableTypography>
                              {item.card.point1}
                            </ListItemText>
                          </ListItem>
                          {item.card.point2 !== '' && (
                            <ListItem>
                              <ListItemIcon>
                                <Check />
                              </ListItemIcon>
                              <ListItemText disableTypography>
                                {item.card.point2}
                              </ListItemText>
                            </ListItem>
                          )}
                          {item.card.point3 && (
                            <ListItem>
                            <ListItemIcon>
                              <Check />
                            </ListItemIcon>
                            <ListItemText disableTypography>
                              {item.card.point3}
                            </ListItemText>
                          </ListItem>
                          )}
                          </List>
                        </Grid>
                      </Grid>
                    </Paper>
                  ))
                }
              </Carousel>
            {/* </Grid> */}
          </Grid>        
        </Grid>   
      </Container>
      {/* <Paper elevation={3}
        // style={{margin: "0 20px", backgroundColor: "red", padding: "10px"}}
        className={classes.paper}
      >
        <Container >
          <Typography className={classes.bigTitle} variant='body1' align='center'>
            En nuestra empresa ofrecemos una variedad de servicios que son de gran ayuda.
          </Typography>
          <div className={classes.demo}>
            <List>
              <ListItem>
                <ListItemIcon>
                  <Check />
                </ListItemIcon>
                <ListItemText>
                  Intermediación comercial internacional, asesoría integral para importaciones y exportaciones., enfocado básicamente
                  a países de Latinoamérica.
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Check />
                </ListItemIcon>
                <ListItemText>
                  Búsqueda de productos y nuevos proveedores. Soluciones integrales de internacionalización de los mercados de las PyMES y
                  microPymes de provincias específicas de España con proyección de sus productos para mercadeo nacional e
                  internacional.
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Check />
                </ListItemIcon>
                <ListItemText>
                  Acompañamiento en las negociaciones con compradores, proveedores y productores.
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Check />
                </ListItemIcon>
                <ListItemText>
                  Compartir Catálogo de productos novedosos con calidades y precios competitivos, de Empresas y PYMES.
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Check />
                </ListItemIcon>
                <ListItemText>
                  Control de calidad de los productos ofertados.
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Check />
                </ListItemIcon>
                <ListItemText>
                  Servicio de compras y entregas en lugar de destino acordado.
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Check />
                </ListItemIcon>
                <ListItemText>
                  Logística internacional.
                </ListItemText>
              </ListItem>
            </List>
          </div>
        </Container>
      </Paper>
      <Paper elevation={3}
        // style={{margin: "0 20px", backgroundColor: "red", padding: "10px"}}
        className={classes.paper}
      >
        <Typography className={classes.bigTitle} variant='body1' align='center'>
          En nuestra empresa ofrecemos una variedad de servicios que son de gran ayuda.
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6}>

            <div className={classes.demo}>
              <Typography className={classes.bigTitle} variant='h6' align='center'>
                BOX SERVICIOS INTERNACIONALES
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <Check />
                  </ListItemIcon>
                  <ListItemText>
                    Consolidación y grupaje de contenedores para clientes FCL Y LCL: Recepción, consolidación y reparto para destinos
                    hacia América Latina.
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Check />
                  </ListItemIcon>
                  <ListItemText>
                    Recogidas y entregas de mercancías sin límite de peso.
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Check />
                  </ListItemIcon>
                  <ListItemText>
                    Servicios especiales en Puertos, aeropuertos y polígonos.
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Check />
                  </ListItemIcon>
                  <ListItemText>
                    Distribución P2P, B2B y C2C en la UE.
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Check />
                  </ListItemIcon>
                  <ListItemText>
                    Servicio para empresas según la negociación de Incoterms.
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Check />
                  </ListItemIcon>
                  <ListItemText>
                    Acuerdos arancelarios como IVA en país destino en caso de negociación con Incoterms DDP.
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Check />
                  </ListItemIcon>
                  <ListItemText>
                    Negociaremos con los 7 Incoterms Polivalentes utilizados en cualquier tipo de transporte: EXW, FCA, CPT, CIP, DAT,
                    DAP y DDP.
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Check />
                  </ListItemIcon>
                  <ListItemText>
                    Negociaremos con 4 Incoterms exclusivos para transporte marítimo: FAS, FOB, CFR y CIF.
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Check />
                  </ListItemIcon>
                  <ListItemText>
                    Envíos nacionales e internacionales de mensajería urgente.
                  </ListItemText>
                </ListItem>
              </List>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <div className={classes.demo}>
              <Typography className={classes.bigTitle} variant='h6' align='center'>
                BOX ENVIOS COURIER
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <Check />
                  </ListItemIcon>
                  <ListItemText>
                    Servicios Especiales: Repartos especiales de lotes, regalos de empresas, transporte de líquidos, etc. ofrece embalaje
                    como valor añadido.
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Check />
                  </ListItemIcon>
                  <ListItemText>
                    Servicio Refrigerado para mercancías procedentes de América Latina hacia España.
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Check />
                  </ListItemIcon>
                  <ListItemText>
                    Servicio de Mudanzas y Guardamuebles internacional, con entrega y recogida a domicilio.
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Check />
                  </ListItemIcon>
                  <ListItemText>
                    Envío de muebles y electrodomésticos P2P: montaje y retirada de embalajes y retiro de unidades en desuso
                    transportadas hacia centros de reciclaje.
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Check />
                  </ListItemIcon>
                  <ListItemText>
                    TUBOX: compras bajo el lema  ̈COMPRA EN CUALQUIER LUGAR Y NOSOTROS TE LO LLEVAMOS ́,  ̈COMPRAMOS POR
                    TI ̈ ó  ̈COMPRAMOS POR ENCARGO ̈ en la UE o CHINA hacia determinados destinos de América Latina, productos
                    tales como: casa e interiores, coches y repuestos, maquinaria,  equipos y electrónica.
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Check />
                  </ListItemIcon>
                  <ListItemText>
                    ASESORAMIENTO INTEGRAL Y MODELO LOGISTICO para cada tipo de cliente y sus necesidades de envío, bien sea
                    personas naturales, principalmente el segmento inmigrantes, pequeñas y medianas empresas y MARKETPLACES más
                    influyentes en países de destino (inicialmente Colombia, República Dominicana, Ecuador, Nicaragua y Honduras.
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Check />
                  </ListItemIcon>
                  <ListItemText>
                    Aplicación para realizar delibery de entregas y recogidas. A través de partners con flotas de vehículos y emprendedores
                    autónomos, con tipo de vehículo adecuados al volumen de carga y zonas de entrega.
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Check />
                  </ListItemIcon>
                  <ListItemText>
                  Servicio de monitoreo online Ttracking en tiempo real de cada envío a través de nuestro software de gestión
                  empresarial alojado en la nube.
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Check />
                  </ListItemIcon>
                  <ListItemText>
                    Servicio de call center oportuno para toma de pedidos
                  </ListItemText>
                </ListItem>
              </List>
            </div>  
          </Grid> 

          <Grid className='image-services' item xs={true} sm={6} md={6} lg={6}>
            <img src={image} alt='Imagen de servicios' />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Typography className={classes.bigTitle} variant='h3' align='center'>
              SERVICIOS
            </Typography>
            <Grid className={classes.card} container>
              <Grid item xs={12} >
                <Paper square elevation={0} className={classes.paper}>
                  <Typography>Búsqueda de productos y proveedores.</Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} >
                <Paper square elevation={0} className={classes.paper}>
                  <Typography>Acompañamiento en las negociaciones, compradores, proveedores y productores.</Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} >
                <Paper square elevation={0} className={classes.paper}>
                  <Typography>Control de calidad de los productos.</Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} >
                <Paper square elevation={0} className={classes.paper}>
                  <Typography>Logística internacional</Typography>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>*/}
    </div>
  )
}

export default Services2