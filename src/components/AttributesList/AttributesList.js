import styles from './AttributesList.module.scss'
import { useState, useEffect, useRef } from 'react'

export default function AttributesList() {

    const attributes = ['Critical Thinker', 'Leadership Mentality', 'Strong Communicator', 'Careful Organizer', 'Effective Public Speaker', 'Creative Problem Solver', 'Interpersonal Manager', 'Versatile Skillset', 'Team Player', 'Fun Guy']

    const [attribute, setAttribute] = useState(attributes[0])
    const [num, setNum] = useState(0)
    const [toggle, setToggle] = useState(true)
    const [run, setRun] = useState(true)
    
    const className = toggle ? `${styles.displayFade}` : `${styles.null}`
    
    useEffect(function() {
        
        const att = document.getElementById('display')

        if (attribute === attributes[9]) {
            setAttribute(attributes[0])
            setNum(1)
          
        } else {
            setAttribute(attributes[num])
            setNum(num + 1)
        }
        
        setTimeout(displayAttribute, 4950)

        function displayAttribute() {
           setToggle(false)
       
            setTimeout(()=>{
                setRun(!run)
                setToggle(true)
            }, 50)
        }
    }, [run])
  
    return(
        <div className={styles.attributesList}>
            <p className={className}  id="display">{attribute}</p>
        </div>
    )
}