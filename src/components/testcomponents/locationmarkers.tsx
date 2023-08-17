

// import { useState } from "react";
// import { Marker } from "react-leaflet";
// import { useMapEvents } from "react-leaflet";





// export default function LocationMarkers() {
//     const initialMarkers: LatLng[] = [new LatLng(51.505, -0.09)];
//     const [markers, setMarkers] = useState(initialMarkers);
  
//     const map = useMapEvents({
//       click(e) {
//         markers.push(e.latlng);
//         setMarkers((prevValue) => [...prevValue, e.latlng]);
//       }
//     });
  
//     return (
//       <React.Fragment>
//         {markers.map(marker => <Marker position={marker} ></Marker>)}
//       </React.Fragment>
//     );
//   }