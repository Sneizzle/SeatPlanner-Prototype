import { useEffect, useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useNavigate } from 'react-router';


export default function Update() {
    const navigation = useNavigate()

const [id, setID] = useState<number|null>(null);
const [name, setName] = useState('');
const [location, setLocation] = useState('');
const [team, setTeam] = useState('');
const [checkbox, setCheckbox] = useState(false);


useEffect(() => {

   
    const id = localStorage.getItem('ID');
    if (id !== null) setID(Number.parseInt(id, 10));

    const name = localStorage.getItem('Name');
    if (name !== null) setName(name);

    const location = localStorage.getItem('Location');
    if (location !== null) setLocation(location);

    const team = localStorage.getItem('Team');
    if (team !== null) setTeam(team);

    const checkbox = localStorage.getItem('Checkbox Value');
    if (checkbox !== null) setCheckbox(Boolean(checkbox));

//     setID(localStorage.getItem("ID"))
//     setName(localStorage.getItem("Name"));
//     setLocation(localStorage.getItem("Location"));
//     setTeam(localStorage.getItem("Team"));
//     setCheckbox(localStorage.getItem("Checkbox Value"));
}, []);

const UpdateAPIData = () => {
    axios.put(`https://64ccd9752eafdcdc851a5daf.mockapi.io/SPData/${id}`, {
        name,
        location,
        team,
        checkbox
    }).then(() => {
        navigation("/readPage");
      })
};




return(
    <div>
  <Form className='create-form'>
    <Form.Field>
      <label>Name</label>
      <input placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
    </Form.Field>
    <Form.Field>
      <label>Location</label>
      <input placeholder='Location' value={location} onChange={(e) => setLocation(e.target.value)}/>
    </Form.Field>
    <Form.Field>
      <label>Team</label>
      <input placeholder='Team' value={team} onChange={(e) => setTeam(e.target.value)}/>
    </Form.Field>


    <Form.Field>
      <Checkbox label='I agree to the Terms and Conditions' checked={checkbox} onChange={() => setCheckbox(!checkbox)}/>
    </Form.Field>


    <Button type='submit' onClick={UpdateAPIData}>Update</Button>

  </Form>
  </div>
  )
}
