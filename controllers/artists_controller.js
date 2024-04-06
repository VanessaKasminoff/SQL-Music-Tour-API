// DEPENDENCIES
const artists = require('express').Router()
const db = require('../models')
const { Artists } = db 

// FIND ALL ARTISTS
artists.get('/', async (req, res) => {
    try {
        const foundArtists = await Artists.findAll({
            order: [['available_start_time', 'ASC']]
        })
        res.status(200).json(foundArtists)
    } catch (error) {
        res.status(500).json(error)
    }
})

//FIND A SPECIFIC ARTIST
artists.get('/:id', async (req, res) => {
    try {
        const foundArtist = await Artists.findOne({
            where: {artist_id: req.params.id}
        })
        res.status(200).json(foundArtist)
    } catch (error) {
        res.status(500).json(error)
    }
})

//CREATE AN ARTIST
artists.post('/', async (req, res) => {
    try {
        const newArtist = await Artists.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new artist',
            data: newArtist
        })
    } catch (error) {
        res.status(500).json(error)
    }
})

//UPDATE AN ARTIST
artists.put('/:id', async (req, res) => {
    try {
        const updatedArtists = await Artists.update(req.body, {
            where: {
                artist_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedArtists} artist(s)`
        })
    } catch (error) {
        res.status(500).json(error)
    }
})

//DELETE AN ARTIST
artists.delete('/:id', async (req, res) => {
    try {
        const deletedArtists = await Artists.destroy({
            where: {
                artist_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedArtists} artist(s)`
        })
    } catch (error) {
        res.status(500).json(error)
    }
})

// EXPORT
module.exports = artists
