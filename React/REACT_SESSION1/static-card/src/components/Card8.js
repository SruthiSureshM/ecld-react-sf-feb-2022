import React from 'react';
import styles from './Card.module.css';

function Card8(){
    return(   
        <div className={styles.card}>
        <div className={styles.row}>
            <img src = "/img8.jpg" alt="biriyani" height='200px' width='200px'/>
            <p>PUTTU</p>
            </div>
        </div>
    
    )
}

export default Card8;