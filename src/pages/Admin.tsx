
import '../Styles/Admin.css'
// import Create from '../components/CRUD/create'
import VerticalButtons from '../components/buttongroup/VerticalButtons';
import '../components/buttongroup/VerticalButtons'
import Modal from '../components/AdminModal';
import Create from '../components/CRUD/create';
import Read from '../components/CRUD/read';
import { AiFillHome } from 'react-icons/ai'
import { Link } from "react-router-dom";

function Admin() {
  return (

    <div className='admin-container'>
     
   

   
<h2 className="main-header">Admin Operations  <Modal></Modal></h2>

      <div className='left-component'>
        <div>
          <h2>Create Component</h2>     
<div> <Create> </Create> </div></div>
      </div>
      <div className='right-component'>
      <div>
          <h2>Read Component</h2> 
          <div><Read></Read></div></div>
      </div>


    </div>


    
      



     
     
    
  );
}
export default Admin;{
  
  
  


  
  
  /* <Link to="/">Click to view our Home page</Link> */}



