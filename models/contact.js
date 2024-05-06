const { model, Schema } = require('mongoose')


const contactSchema = new Schema ({
    name: { required: true, type: String },
    email: { required: true, type: String},
    message: { type: String }
}, {
    timestamps: true
})

const Contact = model('Contact', contactSchema)

module.exports = Contact