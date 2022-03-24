import React from 'react';
import styles from './Card.module.css';

function Card(props){
    return(   
        <div className={styles.card}>
            <div className={styles.row}>
                <img src = {props.img} alt="biriyani" height='200px' width='200px'/>
                <p>{props.name}</p>
            </div>
        </div>
    
    )
}

export default Card;