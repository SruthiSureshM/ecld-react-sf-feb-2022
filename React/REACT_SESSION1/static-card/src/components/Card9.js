import React from 'react';
import styles from './Card.module.css';

function Card9(){
    return(   
        <div className={styles.card}>
        <div className={styles.row}>
            <img src = "/img9.jpg" alt="biriyani" height='200px' width='200px'/>
            <p>SHAWARMA</p>
            
            </div>
        </div>
    
    )
}

export default Card9;