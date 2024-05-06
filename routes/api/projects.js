const express = require('express')
const router = express.Router()
const projectsCtrl = require('../../controllers/api/projects')

router.get('/', projectsCtrl.index, projectsCtrl.jsonProjects)

router.get('/:id', projectsCtrl.show, projectsCtrl.jsonProject)

module.exports = router