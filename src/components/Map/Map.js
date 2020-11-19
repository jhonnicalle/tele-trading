import { Container } from '@material-ui/core'
import GoogleMapReact from 'google-map-react'
import React from 'react'
import LocationPin from './LocationPin/LocationPin'
import './Map.css'

const Map = ({location, zoomLevel}) => {
  return (
    <div style={{ height: '100vh', width: '100%' }} className="map">
      <Container>
        <h2 className="map-h2">Conoce donde estamos ubicados</h2>
        <div className="google-map">
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