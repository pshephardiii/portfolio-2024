import styles from './ProjectItem.module.scss'

export default function ProjectItem({project}){
    return(
        <div>
            <h1>{project.name}</h1>
            <h3>{project.summary}</h3>
            <p>{project.tools}</p>
            <img src={`${project.image}`}></img>
            <div>
                <a href={`${project.githubLink}`}>GitHub Repository</a>
                <a href={`${project.liveProjectLink}`}>Live Project Link</a>
            </div>
            <p>{project.description}</p>
            
        </div>
    )
}