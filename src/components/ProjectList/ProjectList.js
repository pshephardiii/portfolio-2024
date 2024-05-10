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
            <div className={styles.ProjectList}>
                <div className={styles.projectContainer}>
                    <h3 className={styles.projectName}>{projects[0].name}</h3>
                    <p className={styles.projectSummary}>{projects[0].summary}</p>
                    <p className={styles.projectTools}>{projects[0].tools}</p>
                    <Link to={`/projects/${projects[0]._id}`}><img src={projects[0].image} className={styles.projectImage}></img></Link>
                </div>
                <div className={styles.projectContainer}>
                    <h3 className={styles.projectName}>{projects[1].name}</h3>
                    <p className={styles.projectSummary}>{projects[1].summary}</p>
                    <p className={styles.projectTools}>{projects[1].tools}</p>
                    <Link to={`/projects/${projects[1]._id}`}><img src={projects[1].image} className={styles.projectImage}></img></Link>
                </div>
                <div className={styles.projectContainer}>
                    <h3 className={styles.projectName}>{projects[2].name}</h3>
                    <p className={styles.projectSummary}>{projects[2].summary}</p>
                    <p className={styles.projectTools}>{projects[2].tools}</p>
                    <Link to={`/projects/${projects[2]._id}`}><img src={projects[2].image} className={styles.projectImage}></img></Link>
                </div>
            </div>
        )
    }
}