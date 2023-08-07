import { Link } from "react-router-dom";
import Create from "../../components/CRUD/create";
import "../../Styles/Crud.css";

function CreatePage() {
  return (


    <div className="main">
        <h1>This is the Create Page</h1>

        <Link to="/" className="link">Click to view our Home page</Link>
        <Link to="/admin" className="link">Click to view our Admin page</Link>
      
      
      <Create></Create>
    
    </div>






  );
}

export default CreatePage;