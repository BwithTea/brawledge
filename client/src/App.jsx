import { useState, useEffect } from "react"
import axios from "axios"

function App() {
  const [search, setSearch] = useState('')
  const [maps, setMaps] = useState([])
  const [brawlers, setBrawlers] = useState([])

  async function handleSearch(){
    // http://localhost:3001/api/maps/search?name=${search} will be updated to the correct endpoint once the backend is set up
    const response = await axios.get(`http://localhost:3001/api/maps/search?name=${search}`)
    setMaps(response.data)
    console.log(response.data)
  }


  // Go over
  async function loadBrawlers() {
    const response = await axios.get('http://localhost:3001/api/brawlify')
    setBrawlers(response.data)
    
  }
  // Go over
  function getBrawlerImage(name) {
    console.log("Brawlers:", brawlers)
    const brawler = brawlers.find(b => b.name.toLowerCase() === name.toLowerCase())
    return brawler ? brawler.imageUrl : null
  }
  // Go over
  useEffect(() => {
    loadBrawlers()
  }, [])

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
       {/* Go over */}
      {maps.map(map => (
        <div key={map.id}>
          {map.name}
          <img src={map.imageUrl} alt={map.name}/>
          {map.recommendations && map.recommendations.topPicks.map((brawler, index) => (
            <li key={index}>
              <img 
                src={getBrawlerImage(brawler.name)} 
                alt={brawler.name}
                width={50}
              />
              {brawler.name} - {brawler.winRate}%
            </li>
    ))}
        </div>
      ))}

    </div>
  )
}

export default App