import { Button, Checkbox, Form } from 'semantic-ui-react'
import { useState } from 'react';
import axios from 'axios';



export default function Create() {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [team, setTeam] = useState('');
  const [checkbox, setCheckbox] = useState(false);
  
  const postData = () => {
      axios.post('https://64ccd9752eafdcdc851a5daf.mockapi.io/SPData', 
      {
        name,
        location,
        team,
        checkbox
      })
  }



  return(
    <div>
  <Form className='create-form'>
    <Form.Field>
      <label>Name</label>
      <input placeholder='Name' onChange={(e) => setName(e.target.value)} />
    </Form.Field>
    <Form.Field>
      <label>Location</label>
      <input placeholder='Location' onChange={(e) => setLocation(e.target.value)}/>
    </Form.Field>
    <Form.Field>
      <label>Team</label>
      <input placeholder='Team' onChange={(e) => setTeam(e.target.value)}/>
    </Form.Field>


    <Form.Field>
      <Checkbox label='I agree to the Terms and Conditions' onChange={(e) => setCheckbox(!checkbox)}/>
    </Form.Field>


    <Button onClick={postData} type='submit'>Submit</Button>

  </Form>
  </div>
  )
}

