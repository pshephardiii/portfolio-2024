import styles from './ContactForm.module.scss'
import { useRef, useEffect, useState } from 'react'
import * as contactsAPI from '../../utilities/contacts-api'

export default function ContactForm(){


    const [ formData, setFormData ] = useState({
        name: '',
        email: '',
        message: ''
    })


    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await contactsAPI.createContact(formData)
            alert('Thank you for reaching out! I will be in touch shortly.')

        } catch (error) {
           alert('Please leave a name and email if you would like to reach out. Thank you!')
           console.error(error)
        }
    }

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value })
    }


    return(
        <div>
            <h2>Contact Form</h2>
            <form onSubmit={handleSubmit} autoComplete="off">
                <div>
                    <input value={formData.name} placeholder="Name" type="text" name="name" onChange={handleChange}></input>
                    <input value={formData.email} placeholder="Email" type="text" name="email" onChange={handleChange}></input>
                    <input value={formData.message} placeholder="Message" type="text" name="message" onChange={handleChange}></input>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}