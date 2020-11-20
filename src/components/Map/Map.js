import { Container, Typography } from '@material-ui/core'
import GoogleMapReact from 'google-map-react'
import React from 'react'
import LocationPin from './LocationPin/LocationPin'
import './Map.css'
import { useStyles } from './MapStyles'

const Map = ({location, zoomLevel}) => {
  const classes = useStyles()

  return (
    <div style={{ width: '100%' }} className="map">
      <Container>
        <Typography variant='h4' align='center' className={classes.titleContact}>CONOCE DÓNDE ESTAMOS UBICADOS</Typography>
        <div className={classes.map}>
          <GoogleMapReact            
            bootstrapURLKeys={{ key: 'AIzaSyCeo4KCNtlvV2Wo04x353GFFyg0g0HPDio' }}
            defaultCenter={location}
            defaultZoom={zoomLevel}
          >
            <LocationPin
              lat={location.lat}
              lng={location.lng}
              text={location.address}
              color='blue'
            />
          </GoogleMapReact>
        </div>
      </Container>
    </div>
  )
}

export default Map;