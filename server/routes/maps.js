import { Router } from 'express'
import axios from 'axios'
import { mapRecommendations } from '../data/recommendations.js'

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
        return res.status(400).json({error: 'name query param required'})
    }

    try {


        const response = await axios.get("https://api.brawlify.com/v1/maps")

        const filtered = response.data.list.filter(map => 
            map.name.toLowerCase().includes(name.toLowerCase())
        )

        const recommendations = filtered.map(map => ({
            ...map,
            recommendations: mapRecommendations[map.name] || null
        }))



        res.json(recommendations)
        console.log(recommendations)
    } catch (error) {
        console.log(error)
        res.status(500).json({error: 'Error getting map'})
    }
})








router.get('/:id', async (req, res) => {

    try {
        const response = await axios.get(`https://api.brawlify.com/v1/maps/${req.params.id}`)
        console.log(response.data)
        res.json(response.data)
        
    }catch (error) {
        console.log(error)
        res.status(500).json({error: "Failed to get map"})
    }


})


export default router