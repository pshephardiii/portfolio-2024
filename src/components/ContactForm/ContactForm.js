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
        try {
            await contactsAPI.createContact(formData)
            setToggle(false)

        } catch (error) {
           alert('Please leave a name and email if you would like to reach out. Thank you!')
           console.error(error)
        }
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
        <div>
            <h2>Contact Form</h2>
            { toggle ?
            <form onSubmit={handleSubmit} autoComplete="off">
                <div>
                    <input value={formData.name} placeholder="Name" type="text" name="name" onChange={handleChange}></input>
                    <input value={formData.email} placeholder="Email" type="text" name="email" onChange={handleChange}></input>
                    <input value={formData.message} placeholder="Message" type="text" name="message" onChange={handleChange}></input>
                    <button type="submit">Submit</button>
                </div>
            </form> :
            <h3>Thank you for reaching out! I'll be in touch soon.</h3>
            }
        </div>
    )
}