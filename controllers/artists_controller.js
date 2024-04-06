// DEPENDENCIES
const artists = require('express').Router()
const db = require('../models')
const { Artist, Meet_Greet, Event, Set_Time } = db 
const {Op} = require('sequelize')

// FIND ALL ARTISTS
artists.get('/', async (req, res) => {
    try {
        const foundArtists = await Artist.findAll({
            order: [['available_start_time', 'ASC']],
            where: {
                name: {[Op.like]: `%${req.query.name ? req.query.name : ''}%`}
            }
        })
        res.status(200).json(foundArtists)
    } catch (error) {
        res.status(500).json(error)
    }
})

//FIND A SPECIFIC ARTIST
artists.get('/:name', async (req, res) => {
    try {
        const foundArtist = await Artist.findOne({
            where: {name: req.params.name},
            include: [
                {
                    model: Meet_Greet, 
                    as: "meet_greets",
                    include: {
                        model: Event, 
                        as: "events",
                        where: {name: {[Op.like]: `%${req.query.event ? req.query.event : ''}%`}}
                    }
                },
                {
                    model: Set_Time,
                    as: "set_times",
                    include: {
                        model: Event, 
                        as: "events",
                        where: {name: {[Op.like]: `%${req.query.event ? req.query.event : ''}%`}}
                    }
                }
            ]
        })
        res.status(200).json(foundArtist)
    } catch (error) {
        res.status(500).json(error)
    }
})

//CREATE AN ARTIST
artists.post('/', async (req, res) => {
    try {
        const newArtist = await Artist.create(req.body)
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
        const updatedArtists = await Artist.update(req.body, {
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
        const deletedArtists = await Artist.destroy({
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
