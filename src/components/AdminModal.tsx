// AdminModal.jsx
import React, { useState, useEffect } from "react";
import "../Styles/Modal.css";
import { BsTools } from "react-icons/bs";
import MyMap from "./testcomponents/LeafLetAdminComponent";
import Dropdown from "react-dropdown";
import { Button, Table } from "semantic-ui-react";
import Read from "./CRUD/read";
import axios from "axios";
import adminUser from "./utility/adminUser";

//default export
export default function Modal() {
  // State Management
  const [modal, setModal] = useState(false);
  const [APIData, setAPIData] = useState([]);
  const [markers, setMarkers] = useState([]);
  const [addMarkerMode, setAddMarkerMode] = useState(false);
  const [assignSeatMode, setAssignSeatMode] = useState(false);

  const toggleAssignSeatMode = () => {
    setAssignSeatMode((prevState) => !prevState);
  };
  const toggleAddMarkerMode = () => {
    setAddMarkerMode((prevState) => !prevState);
  };

  const defineSeat = (data) => {
    toggleAssignSeatMode();
    toggleAddMarkerMode();
    localStorage.setItem("AdminUserMarker", btoa(JSON.stringify(data)));
  };

  const [selectedPerson, setSelectedPerson] = useState(
    new Array(markers.length).fill(null)
  );

  const unassignSeat = (id) => {
    axios
      .put(`https://64ccd9752eafdcdc851a5daf.mockapi.io/SPData/${id}`, {
        markerCoords: [],
        checkbox: false,
      })
      // .then((response) => {
      //   setAPIData((prevState) => {
      //     const oldDataIndex = prevState.findIndex((data) => data.id === id);
      //     const newData = response.data;
      //     const newState = [...prevState];
      //     newState[oldDataIndex] = newData;
      //     return newState;

      .then((response) => {
        setAPIData((prevState) => {
          const index = prevState.findIndex((data) => data.id === id);
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
  };

  // API Management
  //API GET

  useEffect(() => {
    axios
      .get(`https://64ccd9752eafdcdc851a5daf.mockapi.io/SPData`)
      .then((response) => {
        setAPIData(response.data);
        console.log(response.data);
        // data til response.data
      });
  }, []);

  // Filter dropdownmenu for unassigned people.
  function getUnassignedPeople() {
    return APIData.filter((data) => !data.checkbox) // Filter unassigned people
      .map((data) => ({ value: data.id, label: data.name }));
  }

  //Modal
  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  // const handleUpdateTable = (...markers) => {
  //   setMarkers(updatedMarkers)
  // }

  // Dropdownmenu
  const options = ["one", "two", "three"];
  const defaultOption = options[0];

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
                APIData={APIData}
                setAPIData={setAPIData}
                setMarkers={setMarkers}
                addMarkerMode={addMarkerMode}
                defineSeat={defineSeat}
              />{" "}
            </div>

            <div className="controls">
              <div className="button-container">
                {/* <button onClick={toggleAddMarkerMode}>
                  {addMarkerMode ? "Cancel Add Marker" : "Add Marker"}
                </button> */}
              </div>
            </div>

            <div className="table-container">
              <table className="marker-table">
                <thead>
                  <tr>
                    <th>Marker</th>
                    <th>Position</th>
                    <th>Actions</th>
                  </tr>
                </thead>

                {/* <tbody>
                  {markers.map((marker, index) => (
                    <tr key={index}>
                      <td>{marker.name}</td>
                      <td>{marker.position}</td>
                      <td>Actions</td>
                    </tr>
                  ))}
                </tbody> */}

                <tbody>
                  {markers.map((marker, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      {/* <td>
                        <input
                          type="text"
                          value={marker.name}
                          onChange={(e) => {
                            const updatedMarkers = [...markers];
                            updatedMarkers[index].name = e.target.value;
                            setMarkers(updatedMarkers);
                          }}
                        />
                      </td> */}
                      <td>
                        {marker.position
                          .map((position) => position.toFixed(0))
                          .join(", ")}
                        {/* {marker.position[0].toFixed(0)},{" "}
                        {marker.position[1].toFixed(0)} */}
                        {/* </td>{" "} */}
                      </td>
                      <td>
                        <button>
                          Assign Person{" "}
                          <Dropdown
                            options={getUnassignedPeople()}
                            onChange={(selected) => {
                              const updateSelectedPerson = [...selectedPerson];
                              updateSelectedPerson[index] = selected.value;
                              setSelectedPerson(updateSelectedPerson);
                            }}
                            value={selectedPerson[index]}
                            placeholder="Select an option"
                          />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div>
                <Table singleLine>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell>Name</Table.HeaderCell>
                      <Table.HeaderCell>Team</Table.HeaderCell>

                      <Table.HeaderCell>Seated</Table.HeaderCell>
                      <Table.HeaderCell> Actions</Table.HeaderCell>
                      <Table.HeaderCell> Marker Position</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>

                  <Table.Body>
                    {APIData.map((data) => {
                      return (
                        <Table.Row>
                          <Table.Cell>{data.name}</Table.Cell>
                          <Table.Cell>{data.team}</Table.Cell>
                          <Table.Cell>
                            {data.checkbox ? (
                              "Assigned"
                            ) : (
                              // <button>Requires Seat</button>

                              <button onClick={() => defineSeat(data)}>
                                {assignSeatMode
                                  ? "Place a Marker"
                                  : "Unassigned"}
                              </button>
                            )}
                          </Table.Cell>

                          <Table.Cell>
                            {data.checkbox && (
                              <button onClick={() => unassignSeat(data.id)}>
                                Remove Seat
                              </button>
                            )}
                          </Table.Cell>

                          <Table.Cell>
                            {data.markerCoords
                              .map((position) => position.toFixed(0))
                              .join(", ")}
                          </Table.Cell>

                          {/* UpdateFunktion */}
                        </Table.Row>
                      );
                    })}
                  </Table.Body>
                </Table>
              </div>
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
