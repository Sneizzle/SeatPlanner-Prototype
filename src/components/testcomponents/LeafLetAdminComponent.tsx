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
import axios from "axios";

class MyMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.APIData.map((data) => data.markerCoords).filter(
        (coords) => coords.length > 0
      ),
    };
    // this.state.data.forEach(position => {
    //   L.marker([lat, lng]).addTo(map);
    // });
  }

  saveMarkers = (newMarkerCoords) => {
    // tager listen af markers og appender den nye koordinat.
    const data = [...this.state.data, newMarkerCoords];
    console.log(data[0]);
    this.setState(
      // opdaterer listen af koordinater i state.
      (prevState) => ({ ...prevState, data }),
      () =>
        //setMarkers opdateren state i modal.
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
          //   dragging={false}
          maxBounds={bounds}
        >
          <ImageOverlay bounds={bounds} url={officepicture} />
          {/* Render markers */}

          {this.state.data.map((markerCoords, index) => (
            <Marker key={index} position={markerCoords}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
              <button></button>
            </Marker>
          ))}
          {/* Handle map events */}
          <LeafLetAdminComponent
            setAPIData={this.props.setAPIData}
            saveMarkers={this.saveMarkers}
            addMarkerMode={this.props.addMarkerMode}
            defineSeat={this.props.defineSeat}
          />
        </MapContainer>
      </div>
    );
  }
}

function LeafLetAdminComponent({
  saveMarkers,
  addMarkerMode,
  defineSeat,
  setAPIData,
}) {
  const map = useMapEvents({
    click: (e) => {
      console.log(addMarkerMode);
      const adminUser = localStorage.getItem("AdminUserMarker");
      if (!addMarkerMode || !adminUser) return;
      const { lat, lng } = e.latlng;
      L.marker([lat, lng]).addTo(map);
      saveMarkers([lat, lng]);

      const data = JSON.parse(atob(adminUser));

      axios
        .put(`https://64ccd9752eafdcdc851a5daf.mockapi.io/SPData/${data.id}`, {
          ...data,
          markerCoords: [lat, lng],
          checkbox: true,
        })

        .then((response) => {
          defineSeat();
          setAPIData((prevState) => {
            const index = prevState.findIndex(
              (oldData) => oldData.id === data.id
            );
            const newState = [...prevState];
            newState[index] = response.data;
            return newState;

            // return [...prevState, [oldDataIndex]: newData]
            // prevState[oldDataIndex] = newData;
            // return prevState;
          });
          console.log(response.data);
          // data til response.data
        });
    },
  });
  return null;
}

export default MyMap;
