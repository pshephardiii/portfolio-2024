import AttributesList from '../../components/AttributesList/AttributesList'
import styles from './AboutPage.module.scss'

export default function AboutPage(){
    return (
        <main className={styles.AboutPage}>
            <h1>This is the About Page</h1>
            <AttributesList></AttributesList>
        </main>
    )
}