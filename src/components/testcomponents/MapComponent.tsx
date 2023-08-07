import React from 'react';
import { MapContainer, TileLayer, ImageOverlay } from 'react-leaflet';
import { LatLngBoundsLiteral, LatLngTuple } from 'leaflet';
import "../../../public/image.png";

interface MapProps {
  // Component props...
}

const MapComponent: React.FC<MapProps> = ({ /* Component props... */ }) => {
  const initialPosition: LatLngTuple = [51.505, -0.09]; // Set the initial map center
  const zoomLevel: number = 13;

  const imageUrl = 'your-map.png'; // Replace with the name of your PNG map in the public folder

  const bounds: LatLngBoundsLiteral = [
    [51.49, -0.12], // Replace with the latitude and longitude of the southwest corner of your PNG map
    [51.52, -0.06], // Replace with the latitude and longitude of the northeast corner of your PNG map
  ];

  return (
    <div>
      <div className="map-container">
        <MapContainer center={initialPosition} zoom={zoomLevel} style={{ height: '500px' }}>
          <ImageOverlay url={imageUrl} bounds={bounds} />
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        </MapContainer>
      </div>
      {/* Other content or components specific to the map can be added here */}
    </div>
  );
};

export default MapComponent;
