import express from 'express'
import dotenv from 'dotenv'

dotenv.config({ path: '../.env' })

import brawlersRouter from './routes/brawlers.js'
import mapsRouter from './routes/maps.js'

const app = express()
const PORT = 3001

app.use('/api/brawlers', brawlersRouter)
app.use('/api/maps', mapsRouter)

app.get('/health', (req, res) => {
    res.json({ status: 'BrawlEdge server is running' })
})

app.listen(PORT, () => {
    console.log(`BrawlEdge server running on port ${PORT}`)
})