import React from 'react';
import styles from './Card.module.css';

function Card6(){
    return(   
        <div className={styles.card}>
        <div className={styles.row}>
            <img src = "/img6.jpg" alt="biriyani" height='200px' width='200px'/>
            <p>HYDERABADI BIRIYANI</p>
            </div>
        </div>
    
    )
}

export default Card6;