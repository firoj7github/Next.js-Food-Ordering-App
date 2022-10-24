import styles from "../styles/Pizzalist.module.css";
import Pizzacard from "./Pizzacard"

const Pizzalist = () => {
    return (
       
      <div className={styles.container}>
        <h1  className={styles.title}>THE BEST PIZZA IN TOWN</h1>
        
        <div className={styles.wrapper} >
            <Pizzacard/>
            
            
        </div>
      </div>
    );
  };
  
  export default Pizzalist;