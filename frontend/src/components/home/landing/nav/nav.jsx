import {React} from 'react' 
import { Link } from 'react-router-dom';
import styles from "./Nav.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
const Nav = () => {
  return (
    <header className={styles.header}>
      
        <nav className={styles.nav}> 
            
              <h1 className="text-3xl font-bold text-emerald-400">Afalgugn</h1> 
            
            <Link to="/login" className={`${styles.btn} ${styles.primary}`}>
            <FontAwesomeIcon icon ={faRightToBracket}/> login</Link>
        </nav>
      
    </header>
  )
}

export default Nav
