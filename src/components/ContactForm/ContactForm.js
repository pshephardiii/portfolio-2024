import styles from './ContactForm.module.scss'
import { useRef, useEffect, useState } from 'react'
import * as contactsAPI from '../../utilities/contacts-api'

export default function ContactForm(){

    const [ formData, setFormData ] = useState({
        name: '',
        email: '',
        message: ''
    })

    const [ toggle, setToggle ] = useState(true)


    const handleSubmit = async (e) => {
        e.preventDefault()
        if (formData.name !== '' && formData.email !== '') {
        try {
            await contactsAPI.createContact(formData)
            setToggle(false)

        } catch (error) {
           console.error(error)
        }
    } else { alert('Please leave a name and email if you would like to reach out. Thank you!')}
    }

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value })
    }

    useEffect(function () {
        async function toggleTrue() {
            setToggle(true)
        }
        toggleTrue()
    }, [])


    return(
        <div className={styles.ContactForm}>
            <h2 className={styles.formHeader}>Contact Form</h2>
            { toggle ?
            <div className={styles.formContainer}>
                <form onSubmit={handleSubmit} autoComplete="off" className={styles.contactForm}>
                
                    <input className={styles.formInput} value={formData.name} placeholder="Name" type="text" name="name" onChange={handleChange}></input>
                    <input className={styles.formInput} value={formData.email} placeholder="Email" type="text" name="email" onChange={handleChange}></input>
                    <textarea rows="5" cols="19" className={styles.formInput} value={formData.message} placeholder="Message" type="text" name="message" onChange={handleChange}></textarea>
                    <button className={styles.formSubmit} type="submit">Submit</button>
                
                </form>
            </div> :
            <h3>Thank you for reaching out! I'll be in touch soon.</h3>
            }
        </div>
    )
}