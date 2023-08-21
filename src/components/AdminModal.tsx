// AdminModal.jsx
import React, { useState, useEffect } from "react";
import "../Styles/Modal.css";
import { BsTools } from "react-icons/bs";
import MyMap from "./testcomponents/LeafLetAdminComponent";
import Dropdown from "react-dropdown";
import { Button, Table } from "semantic-ui-react";
import Read from "./CRUD/read";
import axios from "axios";

export default function Modal() {
  const [modal, setModal] = useState(false);

  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://64ccd9752eafdcdc851a5daf.mockapi.io/SPData`)
      .then((response) => {
        setAPIData(response.data);
        console.log(response.data);
        // data til response.data
      });
  }, []);

  const setData = (data) => {
    const { id, name, location, team, checkbox } = data;
  };

  function getUnassignedPeople() {
    return APIData.filter((data) => !data.checkbox) // Filter unassigned people
      .map((data) => ({ value: data.id, label: data.name }));
  }

  const toggleModal = () => {
    setModal(!modal);
  };

  const [addMarkerMode, setAddMarkerMode] = useState(false);
  const toggleAddMarkerMode = () => {
    setAddMarkerMode((prevState) => !prevState);
  };

  const [markers, setMarkers] = useState([]);
  const [selectedPerson, setSelectedPerson] = useState(
    new Array(markers.length).fill(null)
  );

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  // const handleUpdateTable = (...markers) => {
  //   setMarkers(updatedMarkers)
  // }

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
                setMarkers={setMarkers}
                addMarkerMode={addMarkerMode}
              />{" "}
            </div>

            <div className="controls">
              <div className="button-container">
                <button onClick={toggleAddMarkerMode}>
                  {addMarkerMode ? "Cancel Add Marker" : "Add Marker"}
                </button>
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
                        {marker.position[0].toFixed(0)},{" "}
                        {marker.position[1].toFixed(0)}
                      </td>{" "}
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

                      <Table.HeaderCell>Checkbox</Table.HeaderCell>
                      <Table.HeaderCell> Actions</Table.HeaderCell>
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
                              <button>Requires Seat</button>
                            )}
                          </Table.Cell>
                          <Table.Cell>
                            <button>Remove Seat</button>
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
