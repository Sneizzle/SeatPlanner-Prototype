import { Link } from "react-router-dom";
import SearchBar from "../components/searchBar";
import people from "../Classes/person";
import MapComponent from "../components/testcomponents/MapComponent";



function Search() {
  return (
    <div>

{/* <DrawRedLine></DrawRedLine> */}
      <h1>This is the Search page... or is it?</h1>
      <Link to="/">Click to view our Home page</Link>
{

<SearchBar data={people}></SearchBar> }
<MapComponent></MapComponent> */


</div>



  );



}

export default Search;