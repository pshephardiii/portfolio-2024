import styles from './SkillList.module.scss'

export default function SkillList(){

    const skills = ['JavaScript', 'HTML', 'CSS', 'MongoDB', 'JSON', 'React', 'Express.js', 'JSX', 'Sass']

    const skillsIcons = ['https://i.imgur.com/fNTr29D.png', 'https://i.imgur.com/LwpNbJR.png', 'https://i.imgur.com/pAxoxNC.png', 'https://i.imgur.com/xPPh7jP.png', 'https://i.imgur.com/CyBT2em.png', 'https://i.imgur.com/Zw00kc0.png', 'https://i.imgur.com/FsLutvP.png', 'https://i.imgur.com/IgCH7Hq.png', 'https://i.imgur.com/YVCimXg.png']

    return(
        <div className={styles.skillListContainer}>
            <ul className={styles.skillList}>
                <li className={styles.skillItem}><img src={skillsIcons[0]} className={styles.icon} title={skills[0]}></img><p className={styles.skillName}>Javascript</p></li>
                <li className={styles.skillItem}><img src={skillsIcons[1]} className={styles.icon} title={skills[1]}></img><p className={styles.skillName}>HTML5</p></li>
                <li className={styles.skillItem}><img src={skillsIcons[2]} className={styles.icon} title={skills[2]}></img><p className={styles.skillName}>CSS</p></li>
                <li className={styles.skillItem}><img src={skillsIcons[3]} className={styles.icon} title={skills[3]}></img><p className={styles.skillName}>MongoDB</p></li>
                <li className={styles.skillItem}><img src={skillsIcons[4]} className={styles.icon} title={skills[4]}></img> <p className={styles.skillName}>JSON</p></li>
                <li className={styles.skillItem}><img src={skillsIcons[5]} className={styles.icon} title={skills[5]}></img> <p className={styles.skillName}>React</p></li>
                <li className={styles.skillItem}><img src={skillsIcons[6]} className={styles.icon} title={skills[6]}></img><p className={styles.skillName}>Express.js</p></li>
                <li className={styles.skillItem}><img src={skillsIcons[7]} className={styles.icon} title={skills[7]}></img><p className={styles.skillName}>JSX</p></li>
                <li className={styles.skillItem}><img src={skillsIcons[8]} className={styles.icon} title={skills[8]}></img><p className={styles.skillName}>Sass</p></li>
            </ul>
        </div>
    )
}