import styles from './ProjectsPage.module.scss'
import ProjectList from '../../components/ProjectList/ProjectList'

export default function ProjectsPage(){
    return (
        <main className={styles.ProjectsPage}>
            <h1>This is the Projects Page</h1>
            <ProjectList></ProjectList>
        </main>
    )
}