// AdminModal.jsx
import React, { useState } from "react";
import "../Styles/Modal.css";
import { BsTools } from "react-icons/bs";
import MyMap from "./testcomponents/LeafLetAdminComponent";

export default function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  const [addMarkerMode, setAddMarkerMode] = useState(false);
  const toggleAddMarkerMode = () => {
    setAddMarkerMode((prevState) => !prevState);
  };

  const [markers, setMarkers] = useState([]);

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Edit Map <BsTools />
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <div className="mapcomp">
              {" "}
              <MyMap
                setMarkers={setMarkers}
                addMarkerMode={addMarkerMode}
              />{" "}
            </div>

            <div className="controls">
              <div className="button-container">
                <button onClick={toggleAddMarkerMode}>
                  {addMarkerMode ? "Cancel Add Marker" : "Add Marker"}
                </button>

                <button>Update Marker</button>
                <button>Delete Marker</button>
              </div>
            </div>

            <div className="table-container">
              <table className="marker-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {markers.map((marker, index) => (
                    <tr key={index}>
                      <td>{marker.name}</td>
                      <td>{marker.position}</td>
                      <td>Actions</td>
                    </tr>
                  ))}
                </tbody>

                <tbody>
                  {markers.map((marker, index) => (
                    <tr key={index}>
                      <td>
                        <input
                          type="text"
                          value={marker.name}
                          onChange={(e) => {
                            const updatedMarkers = [...markers];
                            updatedMarkers[index].name = e.target.value;
                            setMarkers(updatedMarkers);
                          }}
                        />
                      </td>
                      <td>
                        {marker.position[0]}, {marker.position[1]}
                      </td>{" "}
                      <td>Actions</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <button className="close-modal" onClick={toggleModal}>
              Close Window
            </button>
          </div>
        </div>
      )}
    </>
  );
}
