
import { MapContainer, ImageOverlay, Polyline, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import officepicture from '../../img/officepicture.png';


interface Room {
  name: string;
  position: [number, number];
}

const RoomMap: React.FC = () => {
  const frontDoorPosition: [number, number] = [150, 150]; // Replace with the actual X and Y pixel coordinates of the front door

  const rooms: Room[] = [
    { name: 'Johns Desk', position: [67, 260] }, // Replace with the actual X and Y pixel coordinates of Room 1
    { name: 'Patricks Desk', position: [45, 215] }, // Replace with the actual X and Y pixel coordinates of Room 2
    // Add more rooms as needed
  ];
  // Replace 'your-image.png' with the path to your PNG image in the public folder
  const imageUrl = officepicture;
  // Replace the values with the actual pixel dimensions (width and height) of your image
  const imageWidth = 500;
  const imageHeight = 780;
  // Adjust the map container size to fit the image
  const containerWidth = 600
  const containerHeight = 800
  // Adjust the imageBounds to fit the image within the map container
  const imageBounds: [[number, number], [number, number]] = [
    [0, 0], // Southwest corner (top-left corner of the image)
    [imageHeight, imageWidth], // Northeast corner (bottom-right corner of the image)
  ];
  // Set the maximum bounds for the map to restrict panning and zooming
  const maxBounds: [[number, number], [number, number]] = imageBounds;
  return (
    <MapContainer
      center={frontDoorPosition}
      zoom={1}
      style={{ height: `${containerHeight}px`, width: `${containerWidth}px` }}
      maxBounds={maxBounds}
    >
      {/* Use ImageOverlay for the map */}
      <ImageOverlay url={imageUrl} bounds={imageBounds} />
      {/* Draw lines from front door to each room */}
      {rooms.map((room, index) => (
        <div key={index}>
          <Polyline positions={[frontDoorPosition, room.position]} color="blue" />
          <Marker position={room.position}>
            <Popup>{room.name}</Popup>
          </Marker>
        </div>
      ))}
    </MapContainer>
  );
};

export default RoomMap;
