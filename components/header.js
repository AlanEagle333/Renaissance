import styles from '../styles/Home.module.css'
import { SocialIcon } from 'react-social-icons'
import Head from 'next/head'


function Header() {
return(<div>
<Head>



<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Marck+Script&display=swap" rel="stylesheet"/> 
<link href="https://fonts.googleapis.com/css2?family=Audiowide&display=swap" rel="stylesheet"/> 
</Head>

 <header >
     
 <div className={styles.gridZip}>
 <div className={styles.headPhoto}>
    <img src="/norlogo.png" />
    </div>
    <div className={styles.cards}> 
    <ul className={styles.headerul}>    
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
 </div>

 </header>
</div>
                        
)       
}

export {Header}