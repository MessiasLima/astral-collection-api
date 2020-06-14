const bodyParser = require('body-parser')

function setupApplication(app) {
    app.use(bodyParser.json())
}

module.exports = setupApplication