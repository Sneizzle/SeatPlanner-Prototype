import { Link } from "react-router-dom";
import SearchBar from "../components/searchBar";
import MapComponent from "../components/testcomponents/MapComponent";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { PersonConfig } from '../Classes/Interfaces';

function Search() {

  const [APIData, setAPIData] = useState<PersonConfig[]>([]);
  useEffect(() => {
      axios.get(`https://64ccd9752eafdcdc851a5daf.mockapi.io/SPData`)
      .then((response) => {
          setAPIData(response.data);
          console.log(response.data);
          // data til response.data
   })
  }, []);


  return (


    <div>

{/* <DrawRedLine></DrawRedLine> */}
      <h1>This is the Search page... or is it?</h1>
      <Link to="/">Click to view our Home page</Link>
{

<SearchBar data={APIData}></SearchBar> }
<MapComponent></MapComponent> */


</div>



  );



}

export default Search;