import styles from '../styles/Home.module.css'

import { SocialIcon } from 'react-social-icons'

const Footer = (props) => {
    return (
    <>
    
    <div className={styles.cards}> 
    <ul className={styles.footerul}>    
        <li className={styles.li}
        
        ><a href="/" >
        <h2>Home</h2>
        </a></li>
        <li className={styles.li}
         
        ><a href="/about" >
        <h2>About</h2>
        </a></li>
        <li className={styles.li}
         
        ><a href="/works" >
        <h2>Gallery</h2>
        
        </a></li>
       
        <li className={styles.li}>
        <a href='https://instagram.com/just.renaissance.tattoo/' >
        <SocialIcon url='https://instagram.com/just.renaissance.tattoo/' />
        </a>          
        <a href='https://t.me/lord_of_ink_and_needles' >
        <SocialIcon url='https://telegram.me/lord_of_ink_and_needles' />
        </a>
        </li>
    </ul>    
    </div>
    </>
    );
}

export default Footer;