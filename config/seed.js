require('dotenv').config()
const database = require('./database')

const Project = require('../models/project')

function log() {
    console.log(Project)
}

(async function() {

await Project.deleteMany({})
const projects = await Project.create([
    { name: 'Bax Attacks!', summary: 'Turn-based fighting browser game starring my dog Baxter (Solo Project)', tools: 'Vanilla Javascript, CSS, HTML', image: 'https://i.imgur.com/jWpta2R.png', description: 'Developed the gameflow, win/loss battle logic, and audio using Javascript while the structure was designed in HTML. Used CSS for style and animations while including media queries to bolster accessibility and functionality of the game.', githubLink: 'https://github.com/pshephardiii/Bax-Attacks', liveProjectLink: 'https://bax-attacks.netlify.app/' },
    { name: "Paul's Indie Gaming Emporium", summary: 'Full-stack MERN app with functionality of an e-commerce website (Solo Project)', tools: 'JSX, Express, MongoDB, Node.js, React, SCSS', image: 'https://i.imgur.com/Rkxr0eG.png', description: 'Built the frontend using React.js with JSX methods and functions. Served the backend using Node.js and Javascript methods and functions, while using MongoDB database management to save orders and seed fictional games. Styled and created the visual aspects of the site using module compartmentalization with SCSS and deployed the project via DigitalOcean.', githubLink: 'https://github.com/pshephardiii/indie-gaming-emporium', liveProjectLink: 'https://cafe.paulshephard.me/'},
    { name: 'Share-a-Bite', summary: 'Full-stack social media application focused on shared love of food (Team Project - GitHub Manager)', tools: 'JSX, Express, MongoDB, Node.js, React, SCSS', image: 'https://i.imgur.com/loYVmK1.png', description: 'Served as team GitHub and database manager, deployment leader, and primary debugger while also contributing some functionality and design.  Frontend was served with React.js and JSX methods, and backend was served using Node.js, Javascript, and MongoDB database management. Project was styled using SCSS and deployed via Digital Ocean', githubLink: 'https://github.com/pshephardiii/share-a-bite', liveProjectLink: 'https://share-a-bite.paulshephard.me/' }
])

console.log(projects)

process.exit()

})()