import { Link } from "react-router-dom";
import SearchBarRoom from "../components/searchBarRoom";

function FindRoom() {
  return (
    <div>
      <h1>This is the Find Room page</h1>
      <Link to="/">Click to view our Home page</Link>
      <SearchBarRoom data={[]}></SearchBarRoom>




    </div>






  );
}

export default FindRoom;