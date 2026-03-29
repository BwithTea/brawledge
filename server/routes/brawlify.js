import { Router } from "express";
import axios from "axios";


const router = Router()




router.get('/', async (req, res) => {
    try {
        const response = await axios.get('https://api.brawlify.com/v1/brawlers')
        

        const brawlers = response.data.list.map(brawler => ({
            id: brawler.id,
            name: brawler.name,
            imageUrl: brawler.imageUrl
        }))
        
        res.json(brawlers)
        
    } catch (error) {
        console.error(error.message)
        res.status(500).json({ error: 'Failed to fetch brawlers' })
    }
})

export default router