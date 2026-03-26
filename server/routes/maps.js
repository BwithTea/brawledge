import { Router } from 'express'
import axios from 'axios'

const router = Router()

router.get('/', async (req, res) => {
    try {
        const response = await axios.get('https://api.brawlify.com/v1/maps')
        res.json(response.data)
    } catch (error) {
        console.error(error.message)
        res.status(500).json({ error: 'Failed to fetch maps' })
    }
})



router.get('/search', async (req, res) => {
    const name = req.query.name

    if (!name) {
        return res.status(400).json({error: "map name needed"})
    }
    try {
        const response = await axios.get('https://api.brawlify.com/v1/maps')
        
        const filtered = response.data.list.filter(Map =>
            Map.name.toLowerCase().includes(name.toLowerCase())
        )

        res.json(filtered)
    } catch (error) {
        console.log(error)
        res.status(500).json({error: "Error getting maps"})
    }
})

export default router