# BrawlEdge 🎮

Find the best brawlers for every map in Brawl Stars competitive.

## Tech Stack
- Node.js + Express (backend)
- React (frontend - coming soon)

## API Routes
- `GET /api/brawlers` - get all brawlers
- `GET /api/brawlers/search?name=` - search brawlers by name
- `GET /api/brawlers/:id` - get single brawler
- `GET /api/maps` - get all maps
- `GET /api/maps/search?name=` - search maps by name

## Setup
1. Clone the repo
2. Add your Brawl Stars API key to `.env` as `BS_API_KEY`
3. `cd server && npm install`
4. `node index.js`