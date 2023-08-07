import { Link } from "react-router-dom";
import Update from "../../components/CRUD/update";

function UpdatePage() {
  return (
    <div>
      <h1>This is the Update Page</h1>
      <Link to="/">Click to view our Home page</Link>

<Update></Update>


    </div>






  );
}

export default UpdatePage;