const Project = require('../../models/project')

module.exports = {
    index,
    jsonProjects
}

function jsonProjects (_, res) {
    res.json(res.locals.data.projects)
}

async function index(req, res, next){
    try {
        const projects = await Project.find({})
        console.log(projects)
        res.locals.data.projects = projects
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}
