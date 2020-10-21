import { 
  Accordion, 
  AccordionDetails, 
  AccordionSummary, 
  Container, 
  Divider, 
  Grid, 
  List, 
  ListItem, 
  ListItemText, 
  Typography 
} from '@material-ui/core'
import React from 'react'
import { useStyles } from './ServicesStyles'
import './Services.css'
import { ExpandMore} from '@material-ui/icons';

const Services = () => {
  const classes = useStyles()
  
  return (
    <div className='background-screen-services'>
      <Container>
        
        <Typography className={classes.bigTitle} variant="h3" align='center'>
          SERVICIOS
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" className={classes.title}>
              Nos especializamos en: 
            </Typography>
            <div className={classes.card}>
              <List>              
                <ListItem>
                  <ListItemText primary="1. BÚSQUEDA DE PRODUCTOS Y PROVEEDORES" />
                </ListItem>
                <Divider className={classes.divider}/>
                <ListItem>
                  <ListItemText primary="2. ACOMPAÑAMIENTO EN LAS NEGOCIACIONES COMPRADORES, PROVEEDORES Y PRODUCTORES. " />
                </ListItem>
                <Divider className={classes.divider}/>
                <ListItem>
                  <ListItemText primary="3. CONTROL DE CALIDAD DE LOS PRODUCTOS." />
                </ListItem>
                <Divider className={classes.divider}/>
                <ListItem>
                  <ListItemText primary="4. LOGÍSTICA INTERNACIONAL" />
                </ListItem>
              </List>
            </div>
          </Grid>          
          <Grid item xs={12} sm={8}>
            <Typography variant="h6" className={classes.title}>
            Nuestra esencia nace de 5 valores, siempre reflejados en nuestras acciones, relaciones y aspiraciones: 
            </Typography>
            
              <div>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography className={classes.heading}>PROFESIONALIDAD</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Somos y vivimos nuestro negocio.
                      Creamos lazos con compañías basadas en el respeto, la honestidad y la profesionalidad de
                      quienes han tenido la iniciativa de crear esta empresa. 
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Typography className={classes.heading}>RESPONSABILIDAD</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Estamos concienciados, con orgullo, tenemos la convicción firme que con nuestro trabajo
                      incentivamos y aceleramos, la construcción de lazos comerciales y personales que a futuro
                      serán sostenidos y sostenibles, local y globalmente. Para nosotros, para nuestros clientes y
                      para todas las personas a las cuales ayudamos a incentivar su actividad profesional en el
                      exterior. 
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                  >
                    <Typography className={classes.heading}>REINVENCIÓN </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Crecemos con cada oportunidad, La agilidad con la que respondemos a los desafíos nos
                      permite explorar nuevos caminos y ambicionar nuevas oportunidades todos los días. Creemos
                      en la autodisciplina y en las capacidades de las personas que desean crear, innovar, comerciar
                      emprender. 
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                  >
                    <Typography className={classes.heading}>INSPIRACIÓN</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Avanzamos juntos, Progresamos juntos , tenemos la determinación que si tenemos la
                      intensión y la dirección adecuada en la búsqueda de nuevos paradigmas con muchas
                      preguntas y algunas respuestas, instando a todos a que nos acompañen, caminando a nuestro
                      lado. 
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                  >
                    <Typography className={classes.heading}>CONOCIMIENTO</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Sabemos lo que hacemos, Seguimos profundizando en conocimiento de toda la cadena de
                      valor para impulsar la evolución y la diferenciación en nuestros procesos y servicios. 
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                
              </div>
            
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Services