const express = require('express')
const controller = require('./controller')
const configuration = require('./configuration')

const app = express()

configuration(app)

app.use(controller)

module.exports = app