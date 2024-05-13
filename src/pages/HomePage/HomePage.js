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
                <img src='https://i.imgur.com/yZqYVPi.png' className={styles.profileImage}></img>
            </div>
            <p className={styles.footerNod}>For my Resume, GitHub, and LinkedIn Profile, please click on the icons in the footer below!</p>
            <div className={styles.experienceLists}>
                <ul className={styles.homeList}>
                    <li className={styles.homeListItem}>500+ hours of Software Engineering Bootcamp at General Assembly</li>
                    <li className={styles.homeListItem}>Background in Academic Research and Education</li>
                    <li className={styles.homeListItem}>Granted Full-Stack Unit MVP and Cleanest Code Award</li>
                    <li className={styles.homeListItem}>Expertise includes Formal Logic and Digital Ethics</li>
                    <li className={styles.homeListItem}>Served as Team Leader and GitHub Manager</li>
                    <li className={styles.homeListItem}>300+ students taught with a 90% recommendation rate</li>
                </ul>
            </div>
            <SkillList></SkillList>
        </main>
    )
}