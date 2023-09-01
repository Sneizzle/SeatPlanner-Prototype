import SearchBar from "../components/searchBar";
import { useEffect, useState } from "react";
import axios from "axios";
import { PersonConfig } from "../Classes/Interfaces";

function Search() {
  const [APIData, setAPIData] = useState<PersonConfig[]>([]);
  useEffect(() => {
    axios
      .get(`https://64ccd9752eafdcdc851a5daf.mockapi.io/SPData`)
      .then((response) => {
        setAPIData(response.data);
        console.log(response.data);
        // data til response.data
      });
  }, []);

  return <SearchBar data={APIData}></SearchBar>;
}

export default Search;
