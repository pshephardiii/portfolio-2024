const Project = require('../../models/project')

module.exports = {
    index,
    show,
    jsonProject,
    jsonProjects
}

function jsonProject (_, res) {
    res.json(res.locals.data.project)
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

async function show(req, res, next){
    try{
        const project = await Project.findById(req.params.id)
        console.log(project)
        res.locals.project = project
        next()
    }catch(e){
        res.status(400).json({ msg: e.message })
    }
}
