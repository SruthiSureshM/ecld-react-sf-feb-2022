import React from 'react';
import styles from './Card.module.css';

function Card1(){
    return(   
        <div className={styles.card}>
            <div className={styles.row}>
                <img src = "/img1.jpg" alt="biriyani" height='200px' width='200px'/>
                <p>CHAPATI</p>
            </div>
        </div>
    
    )
}

export default Card1;