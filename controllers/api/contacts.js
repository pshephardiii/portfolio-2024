const Contact = require('../../models/contact')


module.exports = {
    create,
    jsonContact
}

function jsonContact (_, res) {
    res.json(res.locals.data.contact)
}

async function create(req, res, next){
    try {
        const contact = await Contact.create(req.body)
        console.log(contact)
        res.locals.data.contact = contact
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}
