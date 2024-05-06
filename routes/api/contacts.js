const express = require('express')
const router = express.Router()
const contactCtrl = require('../../controllers/api/contacts')

router.post('/', contactCtrl.create, contactCtrl.jsonContact)

module.exports = router