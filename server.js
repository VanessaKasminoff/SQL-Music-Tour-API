// DEPENDENCIES
const express = require('express')
const app = express()
const {Sequelize} = require ('sequelize')

// CONFIGURATION / MIDDLEWARE
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the Tour API'
    })
})

//ARTISTS ROUTE
const artistsController = require('./controllers/artists_controller.js')
app.use('/artists', artistsController)

//EVENTS ROUTE
const eventController = require('./controllers/event_controller.js')
app.use('/events', eventController)

//STAGES ROUTE
const stageController = require('./controllers/stage_controller.js')
app.use('/stages', stageController)

// LISTEN
app.listen(process.env.PORT, () => {
    console.log(`🎸 Rockin' on port: ${process.env.PORT}`)
})