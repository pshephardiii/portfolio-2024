import styles from './ProjectList.module.scss'
import { useState, useEffect } from 'react'
import * as projectsAPI from '../../utilities/projects-api'

export default function ProjectList(){

    const [projects, setProjects] = useState([])
    const [toggle0, setToggle0 ] = useState(true) 
    const [toggle1, setToggle1 ] = useState(true) 
    const [toggle2, setToggle2 ] = useState(true) 

    const imageClass0 = toggle0 ? `${styles.projectImageVisible}` : `${styles.projectImageInvisible}`
    const popupClass0 = toggle0 ? `${styles.projectPopupInvisible}` : `${styles.projectPopupVisible}`

    const imageClass1 = toggle1 ? `${styles.projectImageVisible}` : `${styles.projectImageInvisible}`
    const popupClass1 = toggle1 ? `${styles.projectPopupInvisible}` : `${styles.projectPopupVisible}`

    const imageClass2 = toggle2 ? `${styles.projectImageVisible}` : `${styles.projectImageInvisible}`
    const popupClass2 = toggle2 ? `${styles.projectPopupInvisible}` : `${styles.projectPopupVisible}`

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

   async function togglePopup0() {
    setToggle0(!toggle0)
   }

   async function togglePopup1() {
    setToggle1(!toggle1)
   }

   async function togglePopup2() {
    setToggle2(!toggle2)
   }
  
    if (projects.length !== 0) {

        return(
            <div className={styles.ProjectList}>
                <div className={styles.projectContainer}>
                    <h3 className={styles.projectName}>{projects[0].name}</h3>
                    <p className={styles.projectLinks}><a href={projects[0].liveProjectLink} target='_blank' className={styles.link}>Live Project</a> --- <a href={projects[0].githubLink} target='_blank' className={styles.link}>GitHub Repo</a></p>
                    <img src={projects[0].image} className={imageClass0} onClick={togglePopup0}></img>
                    <p className={styles.projectSummary}>{projects[0].summary}</p>
                    <div className={popupClass0} onClick={togglePopup0}>
                        <p className={styles.projectTools}>{projects[0].tools}</p>
                        <p className={styles.projectDecription}>{projects[0].description}</p>
                    </div>
                </div>
                <div className={styles.projectContainer}>
                    <h3 className={styles.projectName}>{projects[1].name}</h3>
                    <p className={styles.projectLinks}><a href={projects[1].liveProjectLink} target='_blank' className={styles.link}>Live Project</a> --- <a href={projects[1].githubLink} target='_blank' className={styles.link}>GitHub Repo</a></p>
                    <img src={projects[1].image} className={imageClass1} onClick={togglePopup1}></img>
                    <p className={styles.projectSummary}>{projects[1].summary}</p>
                    <div className={popupClass1} onClick={togglePopup1}>
                        <p className={styles.projectTools}>{projects[1].tools}</p>
                        <p className={styles.projectDecription}>{projects[1].description}</p>
                    </div>
                </div>
                <div className={styles.projectContainer}>
                    <h3 className={styles.projectName}>{projects[2].name}</h3>
                    <p className={styles.projectLinks}><a href={projects[2].liveProjectLink} target='_blank' className={styles.link}>Live Project</a> --- <a href={projects[2].githubLink} target='_blank' className={styles.link}>GitHub Repo</a></p>
                    <img src={projects[2].image} className={imageClass2} onClick={togglePopup2}></img>
                    <p className={styles.projectSummary}>{projects[2].summary}</p>
                    <div className={popupClass2} onClick={togglePopup2}>
                        <p className={styles.projectTools}>{projects[2].tools}</p>
                        <p className={styles.projectDecription}>{projects[2].description}</p>
                    </div>
                </div>
            </div>
        )
    }
}