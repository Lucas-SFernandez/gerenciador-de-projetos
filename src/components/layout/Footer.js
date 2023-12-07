import {FaGithub, FaInstagram, FaLinkedin} from 'react-icons/fa'

import styles from './Footer.module.css'

function Footer (){
return(
    <footer className={styles.footer}>
        <ul className={styles.social_list}>

            <li>
<FaInstagram />
            </li>

            <li>
            <FaLinkedin />
                </li>

                <li>
                <FaGithub />
                </li>

        </ul>

        <p className={styles.copy_right}>
            <span>Lucas Fernandez </span>
            &copy; 2023
        </p>
    </footer>
)
}

export default Footer