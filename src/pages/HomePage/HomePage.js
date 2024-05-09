import SkillList from '../../components/SkillList/SkillList'
import styles from './HomePage.module.scss'
import { Link } from 'react-router-dom'

export default function HomePage(){
    return (
        <main className={styles.HomePage}>
            <h1>Paul Shephard</h1>
            <img src='https://i.imgur.com/9eG1sV9.png' className={styles.profileImage}></img>
            <h2>Full-Stack Software Developer</h2>
            <p>For my Resume, GitHub, and LinkedIn Profile, please click on the icons in the footer below!</p>
            <SkillList></SkillList>
            <h4>Welcome to my Portfolio! If you have any questions or would like to get a hold of me, feel free to navigate to the <Link to='/contact'>contact page!</Link></h4>
        </main>
    )
}