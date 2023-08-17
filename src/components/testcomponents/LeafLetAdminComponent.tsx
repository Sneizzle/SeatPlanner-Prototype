import React, { Component } from "react";
import {
  MapContainer,
  Marker,
  Popup,
  useMapEvents,
  ImageOverlay,
} from "react-leaflet";
import { CRS } from "leaflet";
import L from "leaflet";
import officepicture from "../../img/officepicture.png";

class MyMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: [],
      data: [],
    };
  }

  saveMarkers = (newMarkerCoords) => {
    const data = [...this.state.data, newMarkerCoords];
    console.log(data[0]);
    this.setState(
      (prevState) => ({ ...prevState, data }),
      () =>
        this.props.setMarkers(
          this.state.data.map((position) => ({ name: "", position }))
        )
    );
  };

  render() {
    const height = Math.min(window.visualViewport?.height as number, 1511);
    const width = height / (1511 / 1069);
    const bounds = [
      [0, 0],
      [height, width],
    ];

    return (
      <div>
        <MapContainer
          className="map"
          attributionControl={false}
          crs={CRS.Simple}
          bounds={bounds}
          style={{ height, width }}
        >
          <ImageOverlay bounds={bounds} url={officepicture} />
          {/* Render markers */}
          {this.state.data.map((markerCoords, index) => (
            <Marker key={index} position={markerCoords}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          ))}
          {/* Handle map events */}
          <LeafLetAdminComponent
            saveMarkers={this.saveMarkers}
            addMarkerMode={this.props.addMarkerMode}
          />
        </MapContainer>
      </div>
    );
  }
}

function LeafLetAdminComponent({ saveMarkers, addMarkerMode }) {
  const map = useMapEvents({
    click: (e) => {
      console.log(addMarkerMode);
      if (!addMarkerMode) return;
      const { lat, lng } = e.latlng;
      L.marker([lat, lng]).addTo(map);
      saveMarkers([lat, lng]);
    },
  });
  return null;
}

export default MyMap;
