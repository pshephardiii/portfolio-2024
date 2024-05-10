import styles from './ProjectsPage.module.scss'
import ProjectList from '../../components/ProjectList/ProjectList'

export default function ProjectsPage(){
    return (
        <main className={styles.ProjectsPage}>
            <h1 className={styles.projectsHeadline}>Projects</h1>
            <p>Click on image or links for more!</p>
            <ProjectList></ProjectList>
        </main>
    )
}