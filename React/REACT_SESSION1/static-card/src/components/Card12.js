import React from 'react';
import styles from './Card.module.css';

function Card12(){
    return(   
        <div className={styles.card}>
        <div className={styles.row}>
            <img src = "/img12.jpg" alt="biriyani" height='200px' width='200px'/>
            <p>DUM BIRIYANI</p>
            </div>
        </div>
    
    )
}

export default Card12;