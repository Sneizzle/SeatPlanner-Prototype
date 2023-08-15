import { LatLngBounds, LatLngBoundsExpression, LatLngExpression, LatLngTuple } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapContainer, ImageOverlay } from 'react-leaflet'
import officepicture from "../img/officepicture.png"
import "../Styles/OverlayStyle.css"


// bredde 1069
// 1511

    // const aspectRatio = 1511/1069; // Change this to your desired aspect ratio
    // const originalHeight = 1511/2; // Original width of the image
    // const originalWidth = originalHeight / aspectRatio; // Calculate original height based on aspect ratio




const Leafletfinallyworks = () => {
  
  const height: number = Math.min(window.visualViewport?.height as number, 1511);
  const width: number = height/(1511/1069)
  
  const wh: LatLngTuple = [width, height];
  const origin: LatLngTuple = [0, 0];
  const bounds: LatLngBoundsExpression = [origin, wh];
  console.log(width, height);
  
 
  return (
       <MapContainer
        className='imageSettings'         
        bounds={bounds}
        dragging = {false}
        zoomControl ={false}
         maxBounds={bounds}
      >
        <ImageOverlay className='imageSettings'

          url= {officepicture}
          bounds={bounds}
          
        />
      </MapContainer>
  );
};


export default Leafletfinallyworks;