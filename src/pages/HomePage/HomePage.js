import SkillList from '../../components/SkillList/SkillList'
import AttributesList from '../../components/AttributesList/AttributesList'
import styles from './HomePage.module.scss'
import { Link } from 'react-router-dom'

export default function HomePage(){
    return (
        <main className={styles.HomePage}>
            <div className={styles.topLeftAndImage}>
                <div className={styles.topLeftMaterial}>
                    <h1 className={styles.homeName}>Paul Shephard</h1>
                    <h2 className={styles.homeTitle}>Full-Stack Software Developer</h2>
                    <h3 className={styles.homeDescription}>A PHILOSOPHER TURNED CODER</h3>
                    <AttributesList className={styles.attList}></AttributesList>
                </div>
                <img src='https://i.imgur.com/9eG1sV9.png' className={styles.profileImage}></img>
            </div>
            <p className={styles.footerNod}>For my Resume, GitHub, and LinkedIn Profile, please click on the icons in the footer below!</p>
            <ul>
                <li>500+ hours of Software Engineering Bootcamp at General Assembly</li>
                <li>Granted Full-Stack Unit MVP and Cleanest Code Award</li>
                <li>Served as Team Leader and GitHub Manager</li>
                <li>Background in Academic Research and Education</li>
                <li>Expertise includes Formal Logic and Digital Ethics</li>
                <li>300+ students taught with a 90% recommendation rate</li>
            </ul>
            <SkillList></SkillList>
        </main>
    )
}