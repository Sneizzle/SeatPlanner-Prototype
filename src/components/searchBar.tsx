import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { PersonConfig } from "../Classes/Interfaces";

function searchBar({ data }: { data: PersonConfig[] }) {
  // note: the id field is mandatory

  const handleOnSearch = (string: string, results: PersonConfig[]) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results);
    console.log("this is handle on search ting");
  };

  const handleOnHover = (result: PersonConfig) => {
    // the item hovered
    console.log(result);
  };

  const handleOnSelect = (item: PersonConfig) => {
    // the item selected
    console.log(item);
    console.log("this is handle on select");
  };

  const handleOnFocus = () => {
    console.log("Focused");
  };

  const formatResult = (item: PersonConfig) => {
    return (
      <>
        <span style={{ display: "block", textAlign: "left" }}>
          id: {item.id}
        </span>
        <span style={{ display: "block", textAlign: "left" }}>
          name: {item.name}
        </span>
        <span style={{ display: "block", textAlign: "left" }}>
          location: {item.location}
        </span>
        <span style={{ display: "block", textAlign: "left" }}>
          team: {item.team}
        </span>
      </>
    );
  };

  return (
    <div className="fancySearchBar" style={{ width: 370 }}>
      <ReactSearchAutocomplete
        items={data}
        onSearch={handleOnSearch}
        onHover={handleOnHover}
        onSelect={handleOnSelect}
        onFocus={handleOnFocus}
        autoFocus
        formatResult={formatResult}
        showIcon={false}
        showClear={false}
      />
    </div>
  );
}

export default searchBar;
