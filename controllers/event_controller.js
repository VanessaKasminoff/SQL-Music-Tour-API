// DEPENDENCIES
const events = require('express').Router()
const db = require('../models')
const { Event } = db 
const {Op} = require('sequelize')

//FIND ALL EVENTS
events.get('/', async (req, res) => {
    try {
        const foundEvents = await Event.findAll({
            order: [['start_time', 'ASC']],
            where: {
                name: {[Op.like]: `%${req.query.name ? req.query.name : ''}%`}
            }
        })
        res.status(200).json(foundEvents)
    } catch (error) {
        res.status(500).json(error)
    }
})

// FIND A SPECIFIC EVENT
events.get('/:id', async (req, res) => {
    try {
        const foundEvent = await Event.findOne({
            where: {event_id: req.params.id}
        })
    } catch (error) {
        res.status(500).json(error)
    }
})

// CREATE AN EVENT

module.exports = events