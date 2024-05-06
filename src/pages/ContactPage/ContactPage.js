import ContactForm from '../../components/ContactForm/ContactForm'
import styles from './ContactPage.module.scss'

export default function ContactPage(){
    return (
        <main className={styles.ContactPage}>
            <h1>This is the Contact Page</h1>
            <ContactForm></ContactForm>
        </main>
    )
}