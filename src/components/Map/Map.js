import { Container, Typography } from '@material-ui/core'
import GoogleMapReact from 'google-map-react'
import React from 'react'
import LocationPin from './LocationPin/LocationPin'
import './Map.css'
import { useStyles } from './MapStyles'
import Fade from 'react-reveal/Fade'

const Map = ({location, zoomLevel}) => {
  const classes = useStyles()

  

  return (
    <div style={{ width: '100%' }} className="map">
      <Container>
      <Fade bottom>
        <Typography variant='h4' align='center' className={classes.titleContact}>CONOZCA DÓNDE ESTAMOS UBICADOS</Typography>
        <div className={classes.map}>
          <GoogleMapReact            
            bootstrapURLKeys={{ key: 'AIzaSyCeo4KCNtlvV2Wo04x353GFFyg0g0HPDio' }}
            defaultCenter={location[0]}
            defaultZoom={zoomLevel}
          >
            <LocationPin
              lat={location[0].lat}
              lng={location[0].lng}
              text={location[0].address}
              color='blue'
            />
            <LocationPin
              lat={location[1].lat}
              lng={location[1].lng}
              text={location[1].address}
              color='blue'
            />
          </GoogleMapReact>
        </div>
      </Fade>
      </Container>
      
    </div>
  )
}

export default Map;