import styles from '../styles/Home.module.css'
import { SocialIcon } from 'react-social-icons'

function Header() {

    return <div>
        
       

          <div className={styles.gridZip}>
          <div>    
         
          <img
          src="/norlogo.png" className={styles.headPhoto}/>
          
          </div>
            <a href="/" className={styles.cards}>
                <h2>Home</h2>
                </a>
            <a href="/about" className={styles.cards}>
                <h2>About</h2>
            </a>
            <a href="/works" className={styles.cards}>
                <h2>My Works</h2>
            </a>
            <a href="/price" className={styles.cards}>
                <h2>Price list</h2>
            </a>
            <div className={styles.cards}>
            <a href='https://instagram.com/just.renaissance.tattoo/' >
            <SocialIcon url='https://instagram.com/just.renaissance.tattoo/' />
            </a>
            
            <a href='https://t.me/lord_of_ink_and_needles' >
            <SocialIcon url='https://telegram.me/lord_of_ink_and_needles' />
            </a>
            </div>
            </div>
            
        </div>
        
}
export {Header}