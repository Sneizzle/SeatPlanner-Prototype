
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import { PersonConfig } from '../Classes/Interfaces'


function searchBar({data}: {data:PersonConfig[]}) {
  // note: the id field is mandatory
  

  const handleOnSearch = (string: string, results: PersonConfig[]) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results)
  }

  const handleOnHover = (result:PersonConfig) => {
    // the item hovered
    console.log(result)
  }

  const handleOnSelect = (item:PersonConfig) => {
    // the item selected
    console.log(item)
  }

  const handleOnFocus = () => {
    console.log('Focused')
  }

  const formatResult = (item:PersonConfig) => {
    return (
      <>
        <span style={{ display: 'block', textAlign: 'left' }}>id: {item.id}</span>
        <span style={{ display: 'block', textAlign: 'left' }}>name: {item.name}</span>
        <span style={{ display: 'block', textAlign: 'left' }}>location: {item.location}</span>
        <span style={{ display: 'block', textAlign: 'left' }}>team: {item.team}</span>
      </>
    )
  }

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ width: 400 }}>
          <ReactSearchAutocomplete
            items={data}
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            autoFocus
            formatResult={formatResult}
          />
        </div>
      </header>
    </div>
  )
}

export default searchBar