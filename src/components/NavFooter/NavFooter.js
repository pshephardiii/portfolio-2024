import styles from './NavFooter.module.scss'

export default function NavFooter(){
    return (
        <div className={styles.NavFooter}>
            <p className={styles.Copyright}>© Paul Shephard 2024</p>
            <a href='https://jmp.sh/zVKiXsnt' className={styles.footerLink} target="_blank"><img src='https://i.imgur.com/5j7wzpH.png' title='Resume' className={styles.footerIcon}></img></a>
            <a href='https://github.com/pshephardiii' className={styles.footerLink} target="_blank"><img src='https://i.imgur.com/wVqeaFz.png' title='GitHub' className={styles.footerIcon}></img></a>
            <a href='https://www.linkedin.com/in/paulshephard76/' className={styles.footerLink} target="_blank"><img src='https://i.imgur.com/gLaHV9t.png' title='LinkedIn' className={styles.footerIcon}></img></a>
        </div>
    )
}