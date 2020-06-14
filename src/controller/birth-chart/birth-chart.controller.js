const { Router } = require('express')
const birthChartService = require('../../service/birth-chart/birth-chart.service')

const router = new Router()

router.post('', (req, res) => {
    res.send(birthChartService.generateBirthChart(req.body))
})

module.exports = router