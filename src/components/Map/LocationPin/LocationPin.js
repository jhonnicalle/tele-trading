import React from 'react'
// import { Icon } from '@iconify/react'
// import locationIcon from '@iconify/icons-mdi/map-marker'
import '../Map.css'

const LocationPin = ({ text, color }) => (
  <div>
    <div
      className="pin bounce"
      style={{ backgroundColor: color, cursor: 'pointer' }}
      title={text}
    />
    <div className="pulse" />
  </div>
)

export default LocationPin