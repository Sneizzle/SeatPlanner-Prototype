import { Link } from "react-router-dom";
import OfficeMap from "../../components/testcomponents/officeMap";



function Drawtesting() {
  return (
    <div>
      <h1>This is the Draw testing Page</h1>
      <Link to="/">Click to view our Home page</Link>
      <OfficeMap></OfficeMap>
    </div>
    
  );
}

export default Drawtesting;





