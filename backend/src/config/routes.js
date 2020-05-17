const express = require('express')

module.exports = function(server) {

    // API Route
    const router = express.Router()
    server.use('/api', router)

    // EasyAddList Route
    const easyAddService = require('../api/easyAdd/easyAddService') //crud
    easyAddService.register(router, '/easyAddList') //path da url
}