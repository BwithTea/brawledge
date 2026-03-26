# BrawlEdge 🎮
> Find the best brawlers for every map in Brawl Stars competitive.

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![Status](https://img.shields.io/badge/status-in%20development-orange)

## About
BrawlEdge is a full stack web application that helps Brawl Stars players find the best brawlers for any competitive map. Built as a learning project to practice REST API design, React, and modern JavaScript.

## Tech Stack
| Layer | Technology |
|-------|-----------|
| Frontend | React + Vite |
| Backend | Node.js + Express |
| Data | Brawl Stars API + Brawlify API |

## API Routes
| Method | Route | Description |
|--------|-------|-------------|
| GET | `/api/brawlers` | Get all brawlers |
| GET | `/api/brawlers/:id` | Get single brawler |
| GET | `/api/brawlers/search?name=` | Search brawlers by name |
| GET | `/api/maps` | Get all maps |
| GET | `/api/maps/search?name=` | Search maps by name |

## Local Setup
1. Clone the repo
```bash
   git clone https://github.com/BwithTea/brawledge.git
```
2. Create a `.env` file in the root with your Brawl Stars API key
```
   BS_API_KEY=your_key_here
```
3. Install and run the server
```bash
   cd server && npm install && node index.js
```
4. Install and run the client
```bash
   cd client && npm install && npm run dev
```

## Project Status
- [x] Express server setup
- [x] Brawlers API routes
- [x] Maps API routes
- [ ] React frontend
- [ ] Map search UI
- [ ] Brawler recommendations
- [ ] Deployment