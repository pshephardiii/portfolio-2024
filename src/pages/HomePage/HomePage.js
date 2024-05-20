import SkillList from '../../components/SkillList/SkillList'
import AttributesList from '../../components/AttributesList/AttributesList'
import styles from './HomePage.module.scss'

export default function HomePage(){
    return (
        <main className={styles.HomePage}>
            <div className={styles.topLeftAndImage}>
                <div className={styles.topLeftMaterial}>
                    <h1 className={styles.homeName}>Paul Shephard</h1>
                    <h2 className={styles.homeTitle}>Full-Stack Software Developer</h2>
                    <h2 className={styles.homeDescription}>A Philosopher Turned Coder</h2>
                    <AttributesList className={styles.attList}></AttributesList>
                </div>
                <img src='https://i.imgur.com/yZqYVPi.png' className={styles.profileImage}></img>
            </div>
            <p className={styles.footerNod}>For my Resume, GitHub, and LinkedIn Profile, please click on the icons in the footer below!</p>
            <div className={styles.experienceLists}>
                <ul className={styles.homeList}>
                    <li className={styles.homeListItem}><a href='https://jmp.sh/0Ftmc9xR' className={styles.listItemLink} target='_blank'>500+ hours of Software Engineering Bootcamp at General Assembly</a></li>
                    <li className={styles.homeListItem}><a href='https://jmp.sh/0Ftmc9xR' className={styles.listItemLink} target='_blank'>Background in Academic Research and Education</a></li>
                    <li className={styles.homeListItem}><a href='https://jmp.sh/0Ftmc9xR' className={styles.listItemLink} target='_blank'>Granted Full-Stack Unit MVP and Cleanest Code Award</a></li>
                    <li className={styles.homeListItem}><a href='https://jmp.sh/0Ftmc9xR' className={styles.listItemLink} target='_blank'>Expertise includes Formal Logic and Digital Ethics</a></li>
                    <li className={styles.homeListItem}><a href='https://jmp.sh/0Ftmc9xR' className={styles.listItemLink} target='_blank'>Served as Team Leader and GitHub Manager</a></li>
                    <li className={styles.homeListItem}><a href='https://jmp.sh/0Ftmc9xR' className={styles.listItemLink} target='_blank'>300+ students taught with a 90% approval rate</a></li>
                </ul>
            </div>
            <SkillList></SkillList>
        </main>
    )
}