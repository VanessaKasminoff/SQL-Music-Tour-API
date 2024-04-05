// DEPENDENCIES
const artists = require('express').Router()
const db = require('../models')
const { Artists } = db 

// FIND ALL BANDS
artists.get('/', async (req, res) => {
    try {
        const foundArtists = await Artists.findAll()
        res.status(200).json(foundArtists)
    } catch (error) {
        res.status(500).json(error)
    }
})


// EXPORT
module.exports = artists
