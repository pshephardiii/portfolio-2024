import ProjectItem from '../../components/ProjectItem/ProjectItem'
import styles from './ProjectShowPage.module.scss'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import * as ProjectsAPI from '../../utilities/projects-api'

export default function ProjectShowPage(){

    const [project, setProject] = useState({})
    const {id} = useParams()

    useEffect(function(){
        async function getProject(){
            try {
                const showProject = await ProjectsAPI.showProject(id)
                setProject(showProject)
            } catch (error) {
                console.error(error)
            }
        }
        getProject()
    })

    return(
        <div>
        <p>Project Show Page</p>
        <ProjectItem project={project}></ProjectItem>
        </div>
    )
}