import { Link } from 'react-router-dom'
import styles from './NavBar.module.scss'

const NavBar = () => {
    return (
        <div className={styles.NavBar}>
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
        </div>
    )
}

export default NavBar