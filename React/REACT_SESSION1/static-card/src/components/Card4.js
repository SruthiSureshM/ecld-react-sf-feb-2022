import React from 'react';
import styles from './Card.module.css';

function Card4(){
    return(   
        <div className={styles.card}>
           <div className={styles.row}>
            <img src = "/img4.jpg" alt="biriyani" height='200px' width='200px'/>
            <p>MOMOS</p>
        
            </div>
        </div>
    
    )
}

export default Card4;