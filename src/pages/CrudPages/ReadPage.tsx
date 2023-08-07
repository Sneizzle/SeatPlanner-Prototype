import { Link } from "react-router-dom";
import Read from "../../components/CRUD/read";


function ReadPage() {
  return (
    <div>
      <h1>This is the Read Page</h1>
      <Link to="/">Click to view our Home page</Link>


<Read></Read>

    </div>






  );
}

export default ReadPage;