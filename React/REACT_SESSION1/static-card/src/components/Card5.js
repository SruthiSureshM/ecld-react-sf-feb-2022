import React from 'react';
import styles from './Card.module.css';

function Card5(){
    return(   
        <div className={styles.card}>
        <div className={styles.row}>
            <img src = "/img5.jpg" alt="biriyani" height='200px' width='200px'/>
            <p>IDILI</p>
            
            </div>
        </div>
    
    )
}

export default Card5;