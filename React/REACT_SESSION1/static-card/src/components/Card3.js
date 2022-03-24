import React from 'react';
import styles from './Card.module.css';

function Card3(){
    return(   
        <div className={styles.card}>
           <div className={styles.row}>
            <img src = "/img3.jpg" alt="biriyani" height='200px' width='200px'/>
            <p>MASALA DOSA</p>
            
            </div>
        </div>
    
    )
}

export default Card3;