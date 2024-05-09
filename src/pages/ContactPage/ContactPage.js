import ContactForm from '../../components/ContactForm/ContactForm'
import styles from './ContactPage.module.scss'

export default function ContactPage(){

    return (
        <main className={styles.ContactPage}>
            <h1 className={styles.contactPageHeading}>Please fill out the form below or send me an email at <a href="mailto:paulshephard598@gmail.com">paulshephard598@gmail.com</a></h1>
            <ContactForm></ContactForm> 
        </main>
    )
}