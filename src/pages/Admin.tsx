
import '../Styles/Admin.css'
// import Create from '../components/CRUD/create'
import VerticalButtons from '../components/buttongroup/VerticalButtons';
import '../components/buttongroup/VerticalButtons'



function Admin() {
  return (
    <div className="main">
      <h2 className="main-header">Admin Operations</h2>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px' }}>
        <VerticalButtons />
        <div style={{ flex: 1, textAlign: 'center', marginLeft: '20px' }}>
        
          {/* <Create /> */}
        </div>
      </div>
    </div>
  );
}
export default Admin;{
  
  
  


  
  // import { Link } from "react-router-dom";
  /* <Link to="/">Click to view our Home page</Link> */}



