import styles from './ProjectList.module.scss'
import { useState, useEffect } from 'react'
import * as projectsAPI from '../../utilities/projects-api'
import { Link } from 'react-router-dom'

export default function ProjectList(){

    const [projects, setProjects] = useState([])

    useEffect(function(){
        async function getProjects(){
            try {
                const allProjects = await projectsAPI.indexProjects()
                setProjects(allProjects)
            } catch (error) {
                console.error(error)
            }
        }
        getProjects()
    }, [projects.length === 0])
  
    if (projects.length !== 0) {

        return(
            <div>
                <Link to={`/projects/${projects[0]._id}`}><div>
                    <h3>{projects[0].name}</h3>
                    <p>{projects[0].summary}</p>
                    <p>{projects[0].tools}</p>
                    <img src={projects[0].image}></img>
                </div></Link>
                <Link to={`/projects/${projects[1]._id}`}><div>
                    <h3>{projects[1].name}</h3>
                    <p>{projects[1].summary}</p>
                    <p>{projects[1].tools}</p>
                    <img src={projects[1].image}></img>
                </div></Link>
                <Link to={`/projects/${projects[2]._id}`}><div>
                    <h3>{projects[2].name}</h3>
                    <p>{projects[2].summary}</p>
                    <p>{projects[2].tools}</p>
                    <img src={projects[2].image}></img>
                </div></Link>
            </div>
        )
    }
}