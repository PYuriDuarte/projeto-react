import {FaFacebook} from 'react-icons/fa'
import {FaSkullCrossbones} from 'react-icons/fa'
import {FaPoo} from 'react-icons/fa'
import styles from './Footer.module.css'




function Footerjs(){

  return (
    <footer>
      <ul className={styles.social_list}>
        <li><FaFacebook/></li>
        <li><FaSkullCrossbones/></li>
        <li><FaPoo/></li>
      </ul>
      <p>RODAPÉ</p>
    </footer>
  )

};

export default Footerjs;