import { useState } from "react"
import axios from "axios"

function App() {
  const [search, setSearch] = useState('')
  const [maps, setMaps] = useState([])

  async function handleSearch(){
    const response = await axios.get(`http://localhost:3001/api/maps/search?name=${search}`)
    setMaps(response.data)
    console.log(response.data)
  }


  return (
    <div>
      <h1>BrawlEdge</h1>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search a map..."
      
      />
      <button onClick={handleSearch}>Search</button>

      {maps.map(map => (
        <div key={map.id}>
          {map.name}
          <img src={map.imageUrl} alt={map.name}/>
        </div>
      ))}

    </div>
  )
}

export default App