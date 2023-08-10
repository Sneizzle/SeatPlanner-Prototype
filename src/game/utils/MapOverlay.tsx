import React, { useState } from 'react';
import { MapContainer, ImageOverlay } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import officepicture from '../../img/officepicture.png';

interface ImageSliderProps {
  imageUrl: string;
}

const ImageSlider: React.FC<ImageSliderProps> = ({ imageUrl }) => {
  const [scale, setScale] = useState<number>(100);

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newScale = parseInt(event.target.value, 10);
    setScale(newScale);
  };

  const calculateNewDimensions = () => {
    const aspectRatio = 16 / 9; // Change this to your desired aspect ratio
    const originalWidth = 1511 / 2; // Original width of the image
    const originalHeight = originalWidth / aspectRatio; // Calculate original height based on aspect ratio

    const newWidth = (originalWidth * scale) / 100;
    const newHeight = (originalHeight * scale) / 100;

    return { width: newWidth, height: newHeight };
  };

  const { width, height } = calculateNewDimensions();

  return (
    <div>
      <img
        src={imageUrl}
        alt="Image"
        style={{ width: `${width}px`, height: `${height}px`, objectFit: 'contain' }}
      />
      <input
        type="range"
        min="10"
        max="200"
        value={scale}
        onChange={handleSliderChange}
        step="1"
      />
    </div>
  );
};

const MapOverlay: React.FC = () => {

  const originalValuewidth = 1069;
  const originalValueheight = 1511;

  const imageUrl = officepicture;
  const imageWidth = originalValuewidth / 2;
  const imageHeight = originalValueheight / 2;
  const containerWidth = 500;
  const containerHeight = 500;
  const imageBounds: [[number, number], [number, number]] = [[0, 0], // Southwest corner (top-left corner of the image)
  [imageHeight, imageWidth], // Northeast corner (bottom-right corner of the image)
  ];
  const maxBounds: [[number, number], [number, number]] = imageBounds;
  const center: [number, number] = [imageHeight / 2, imageWidth / 2]; // Center based on image size

  return (
    <div>
      <MapContainer
        center={center}
        zoom={1}
        style={{ height: `${containerHeight}px`, width: `${containerWidth}px` }}
        maxBounds={maxBounds}
      >
        <ImageOverlay url={imageUrl} alt="Office Picture" bounds={imageBounds} />
      </MapContainer>

      <ImageSlider imageUrl={imageUrl} />
    </div>
  );
};

export default MapOverlay;
