import SkillList from '../../components/SkillList/SkillList'
import styles from './HomePage.module.scss'

export default function HomePage(){
    return (
        <main className={styles.HomePage}>
            <h1>This is the Home Page</h1>
            <SkillList></SkillList>
        </main>
    )
}