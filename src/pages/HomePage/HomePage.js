import SkillList from '../../components/SkillList/SkillList'
import styles from './HomePage.module.scss'

export default function HomePage(){
    return (
        <main className={styles.HomePage}>
            <h1>Paul Shephard</h1>
            <img src='https://i.imgur.com/9eG1sV9.png'></img>
            <h2>Full-Stack Software Engineer</h2>
            <SkillList></SkillList>
            <h4>Welcome to my Portfolio! If you have any questions or would like to get a hold of me, feel free to navigate to the contact page above!</h4>
            <div>
                <a href=''><img src='https://i.imgur.com/5j7wzpH.png' title='Resume'></img></a>
                <a href='https://github.com/pshephardiii'><img src='https://i.imgur.com/wVqeaFz.png' title='GitHub'></img></a>
                <a href='https://www.linkedin.com/in/paulshephard76/'><img src='https://i.imgur.com/gLaHV9t.png' title='LinkedIn'></img></a>
            </div>
        </main>
    )
}