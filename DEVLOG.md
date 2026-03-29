# BrawlEdge — Dev Log

## Session 1 — March 2026

### What I built
- Set up Express server with Node.js
- Connected to Brawl Stars API and Brawlify API
- Built routes for brawlers and maps (get all, get by id, search by name)
- Organized routes into separate files using Express Router
- Set up GitHub with main/dev branching strategy

### What I learned
- How Express routing works and why route order matters
- Difference between req.params and req.query
- How to protect API keys using dotenv
- Why your Express server acts as a middleman between the browser and external APIs
- ES modules (import/export) vs CommonJS (require)
- How export default vs named exports work

### Struggled with
- Route ordering — /search needs to come before /:id
- Missing forward slash on routes
- Missing await on async calls

### Next session
- Build React frontend
- Connect frontend to Express server
- Build map search UI


## Session 2 — March 2026

### What I built
- Set up React frontend with Vite
- Connected React to Express server with axios
- Built map search UI with image display
- Full stack data flow working end to end

### What I learned
- useState for managing search input and maps data
- Controlled inputs in React — React owns the input value
- useEffect concept — running code after render
- How CORS works and why browsers block cross-origin requests
- axios vs fetch — why axios handles errors better
- .map() in JSX to render lists dynamically
- key prop in React lists and why it matters
- Route ordering in Express — specific before dynamic

### Struggled with
- CORS error when connecting frontend to backend
- Missing await on async calls
- Route ordering — /search needs to come before /:id

### Next session
- Wire recommendations into map search
- Get brawler images working
- Start styling


## Session 3 — March 2026

### What I built
- Created recommendations.js with top 10 brawlers per map based on real win rate data
- Wired recommendations into maps search route using spread operator
- Created brawlify.js route file for Brawlify API calls
- Renamed brawlers.js to brawlstars.js for clarity
- Connected brawler images from Brawlify API to recommendations UI
- Full map search now shows map image + top 10 brawlers with images and win rates

### What I learned
- Spread operator (...) copies all fields from an object into a new one
- .filter() vs .find() — filter returns all matches, find returns first match
- useEffect with [] runs once on component mount
- Why we load data once into state instead of fetching on every render
- && vs ternary — && is show this or nothing, ternary is show this or that
- HTTP status codes — 400 client error, 500 server error
- .map() with arrow functions needs () around {} to return an object
- Separation of concerns — brawlstars.js vs brawlify.js vs maps.js

### Struggled with
- Understanding why ({}) is needed in .map() arrow functions
- Brawl Stars API not having imageUrl — had to use Brawlify instead

### Next session
- Get brawler images fully working
- Add autocomplete to map search
- Start styling the UI