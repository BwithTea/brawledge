import { Router } from 'express'
import axios from 'axios'

const router = Router()

router.get('/', async (req, res) => {
    try {
        const response = await axios.get('https://api.brawlstars.com/v1/brawlers', {
            headers: {
                Authorization: `Bearer ${process.env.BS_API_KEY}`
            }
        })
        const brawlers = response.data.items.map(brawler => ({
            id: brawler.id,
            name: brawler.name
        }))
        res.json(brawlers)
    } catch (error) {
        console.error(error.message)
        res.status(500).json({ error: 'Failed to fetch brawlers' })
    }
})

router.get('/search', async (req, res) => {
    const name = req.query.name
    if (!name) {
        return res.status(400).json({ error: 'name query param required' })
    }
    try {
        const response = await axios.get('https://api.brawlstars.com/v1/brawlers', {
            headers: {
                Authorization: `Bearer ${process.env.BS_API_KEY}`
            }
        })
        const filtered = response.data.items.filter(brawler =>
            brawler.name.toLowerCase().includes(name.toLowerCase())
        )
        res.json(filtered)
    } catch (error) {
        console.error(error.message)
        res.status(500).json({ error: 'Failed to search brawlers' })
    }
})

router.get('/:id', async (req, res) => {
    try {
        const response = await axios.get(`https://api.brawlstars.com/v1/brawlers/${req.params.id}`, {
            headers: {
                Authorization: `Bearer ${process.env.BS_API_KEY}`
            }
        })
        res.json(response.data)
    } catch (error) {
        console.error(error.message)
        res.status(500).json({ error: 'Failed to fetch brawler' })
    }
})

export default router