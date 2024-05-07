const { model, Schema } = require('mongoose')

const projectSchema = new Schema ({
    name: { required: true, type: String },
    summary: { required: true, type: String },
    tools: {required: true, type: String },
    image: { required: true, type: String },
    description: { required: true, type: String },
    githubLink: { required: true, type: String },
    liveProjectLink: { required: true, type: String }
}, {
    timestamps: true
})

const Project = model('Project', projectSchema)

module.exports = Project