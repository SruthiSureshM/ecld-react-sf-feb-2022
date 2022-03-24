import React from 'react';
import Card1 from './components/Card1';
import Card2 from './components/Card2';
import Card3 from './components/Card3';
import Card4 from './components/Card4';
import Card5 from './components/Card5';
import Card6 from './components/Card6';
import Card7 from './components/Card7';
import Card8 from './components/Card8';
import Card9 from './components/Card9';
import Card10 from './components/Card10';
import Card11 from './components/Card11';
import Card12 from './components/Card12';

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.body}>
      <h1 className={styles.heading1}><b>ZOMATO</b><input type='text' className={styles.searchbar} placeholder='Select your location'></input></h1>
     
      <h3 className={styles.heading3}>CHOOSE YOUR FAVOURITE DISH</h3>
      <div className={styles.card}>
      <div className={styles.row}>
      <Card1/>
      <Card2/>
      <Card3/>
      <Card4/>
      </div>
      </div>
      <div className={styles.card}>
      <div className={styles.row}>
      <Card5/>
      <Card6/>
      <Card7/>
      <Card8/>
      </div>
      </div>
      <div className={styles.card}>
      <div className={styles.row}>
      <Card9/>
      <Card10/>
      <Card11/>
      <Card12/>
      </div>
      </div>

     
      
    </div>
  );
}

export default App;
