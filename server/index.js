import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config({ path: '../.env' })

import brawlersStarsRouter from './routes/brawlstars.js'
import mapsRouter from './routes/maps.js'
import brawlifyRouter from './routes/brawlify.js'

const app = express()
const PORT = 3001

app.use(cors())
app.use('/api/brawlstars', brawlersStarsRouter)
app.use('/api/brawlify', brawlifyRouter)
app.use('/api/maps', mapsRouter)

app.get('/health', (req, res) => {
    res.json({ status: 'BrawlEdge server is running' })
})

app.listen(PORT, () => {
    console.log(`BrawlEdge server running on port ${PORT}`)
})