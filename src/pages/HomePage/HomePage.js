import SkillList from '../../components/SkillList/SkillList'
import AttributesList from '../../components/AttributesList/AttributesList'
import styles from './HomePage.module.scss'
import { Link } from 'react-router-dom'

export default function HomePage(){
    return (
        <main className={styles.HomePage}>
            <h1>Paul Shephard</h1>
            <h2>Full-Stack Software Developer</h2>
            <h4>A PHILOSOPHER TURNED CODER</h4>
            <img src='https://i.imgur.com/9eG1sV9.png' className={styles.profileImage}></img>
            <AttributesList></AttributesList>
            <h4>Welcome to my Portfolio! If you have any questions or would like to get a hold of me, feel free to navigate to the <Link to='/contact'>contact page!</Link></h4>
            <p>For my Resume, GitHub, and LinkedIn Profile, please click on the icons in the footer below!</p>
            <ul>
                <li>500+ hours in Coding Bootcamp</li>
                <li>Granted Full-Stack Unit MVP and Cleanest Code Award</li>
                <li>Background in Academic Research and Education</li>
                <li>Expertise includes Formal Logic and Digital Ethics</li>
            </ul>
            <SkillList></SkillList>
        </main>
    )
}