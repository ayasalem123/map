// import React from 'react'
// import GoogleMapReact from 'google-map-react'
// import LocationPin from './locationPin';
// const Map = ({ location, zoomLevel }) => (
//     <div className="map">
//       <h2 className="map-h2">Come Visit Us At Our Campus</h2>
  
//       <div className="google-map">
//         <GoogleMapReact
//           bootstrapURLKeys={{ key: '' }}
//           defaultCenter={location}
//           defaultZoom={zoomLevel}
//         >
//           <LocationPin
//             lat={location.lat}
//             lng={location.lng}
//             text={location.address}
//           />
//         </GoogleMapReact>
//       </div>
//     </div>
//   )
//   export default Map;


import {Map,GoogleApiWrapper} from "google-maps-react"
import { Component } from 'react';
class MapContainer extends Component{
  render(){
    return(
      <Map
      google={this.props.google}
      style={{width:"100%",height:"100%"}}
      zoom={10}
      initialCenter={
        {
          lat:28.704060,
          lng:77
        }
      }
      />
    )
  }
}
export default  GoogleApiWrapper({
  apiKey:"AIzaSyAO6W4-bMkSYcsI341IzBzEQ9-FBiJGebM"
})(MapContainer)
