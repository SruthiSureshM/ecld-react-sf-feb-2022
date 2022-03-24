
import Card from './components/Card';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.body}>
      <h1 className={styles.heading1}><b>ZOMATO</b><input type='text' className={styles.searchbar} placeholder='Select your location'></input></h1>
     
     <h3 className={styles.heading3}>CHOOSE YOUR FAVOURITE DISH</h3>
     <div className={styles.card}>
     <div className={styles.row}>
     <Card name="chapati" img="/img1.jpg"/>
     <Card name="pizza" img="/img2.jpg"/>
     <Card name="masaladosa" img="/img3.jpg"/>
     <Card name="momos" img="/img4.jpg"/>
     </div>
     </div>
     <div className={styles.card}>
     <div className={styles.row}>
     <Card name="idili" img="/img5.jpg"/>
     <Card name="hyderabadi biriyani" img="/img6.jpg"/>
     <Card name="paav baji" img="/img7.jpg"/>
     <Card name="puttu" img="/img8.jpg"/>
     </div>
     </div>
     <div className={styles.card}>
     <div className={styles.row}>
     <Card name="shawarma" img="/img9.jpg"/>
     <Card name="burger" img="/img10.jpg"/>
     <Card name="noodles" img="/img11.jpg"/>
     <Card name="thalasery biriyani" img="/img12.jpg"/>
     </div>
     </div>
     </div>
  );
}

export default App;
