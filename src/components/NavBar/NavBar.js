import { Link } from 'react-router-dom'
import styles from './NavBar.module.scss'

const NavBar = () => {
    return (
        <div className={styles.NavBar}>
        <div className={styles.linkContainer}>
            <Link to="/home" className={styles.navLink}>Home</Link>
            <Link to="/about" className={styles.navLink}>About</Link>
            <Link to="/projects" className={styles.navLink}>Projects</Link>
            <Link to="/contact" className={styles.navLink}>Contact</Link>
        </div>
        </div>
    )
}

export default NavBar