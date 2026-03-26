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