import { ImageOverlay, MapContainer } from 'react-leaflet';
import officepicture from '../../img/officepicture.png';
import { CRS } from 'leaflet';




const LeafLetMapComponent = () => {
    const height: number = Math.min(window.visualViewport?.height as number, 1511);
    const width: number = height/(1511/1069)
const bounds=[[0,0],[height, width]]



return (


<MapContainer attributionControl={false} scrollWheelZoom={false} zoomControl={false} dragging={false} crs={CRS.Simple} bounds={bounds} style={{height, width}}>

<ImageOverlay bounds={bounds} url={officepicture}></ImageOverlay>

</MapContainer>




)



}


export default LeafLetMapComponent;