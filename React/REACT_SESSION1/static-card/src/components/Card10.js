import React from 'react';
import styles from './Card.module.css';

function Card10(){
    return(   
        <div className={styles.card}>
        <div className={styles.row}>
            <img src = "/img10.jpg" alt="biriyani" height='200px' width='200px'/>
            <p>BURGER</p>
            
            </div>
        </div>
    
    )
}

export default Card10;