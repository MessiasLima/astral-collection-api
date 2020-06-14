const { Router } = require('express')
const birthChartController = require('./birth-chart/birth-chart.controller')

const router = new Router()

router.use('/birth-chart', birthChartController)

module.exports = router