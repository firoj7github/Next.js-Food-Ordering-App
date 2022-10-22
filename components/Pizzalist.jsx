import styles from "../styles/Pizzalist.module.css";
import Pizzacard from "./Pizzacard"

const Pizzalist = () => {
    return (
       
      <div className={styles.container}>
        <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu
          in pretium molestie. Interdum et malesuada fames acme. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit.
        </p>
        <div className={styles.wrapper}>
            <Pizzacard/>
            
            
        </div>
      </div>
    );
  };
  
  export default Pizzalist;