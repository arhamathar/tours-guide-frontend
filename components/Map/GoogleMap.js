import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


export const MapContainer = () =>{
    const [showingInfoWindow,setShowingInfoWindow] = React.useState(false);
    const [activeMarkers,setActiveMarkers] = React.useState(false);
    

    const onMarkerClick = () =>{
        setShowingInfoWindow({
        showingInfoWindow: true
      });
    }
  
    const onMapClicked = () => {
      if (showingInfoWindow) {
        setShowingInfoWindow({
          showingInfoWindow: false,
        })
      }
    };
  
      return (
        <Map 
        google={google}
            style={{width: '50%', height: '130%'}}
            onClick={onMapClicked}>
          <Marker onClick={onMarkerClick}
                  name={'Current location'} />
  
          <InfoWindow
            marker={activeMarkers}
            visible={showingInfoWindow}>
              <div>
                <h1>Hello</h1>
              </div>
          </InfoWindow>
        </Map>
      )
  }



export default GoogleApiWrapper({
    apiKey: (process.env.REACT_APP_GOOGLE_MAP_API_KEY)
  })(MapContainer)