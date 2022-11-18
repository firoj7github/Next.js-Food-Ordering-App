import styles from "../styles/Pizzacard.module.css";
import Image from "next/image";
import Link from "next/link";



const Pizzacard = ({pizza}) => {
  
  
    return (
      <Link href={`/product/${pizza._id}`}>
      <div className={styles.manage}>
        <div className={styles.control}>
         <h5 className="mt-2 ms-2 text-info">-10%</h5>
       
       <Image className="ms-4" src={pizza.img}  width="300px" height="306px" alt="..."/>
       <div>
         <h5 className=" ms-5 text-white fs-4 fw-bold">{pizza.title}</h5>
         <label className="ms-5 fs-4 fw-bold text-white">${pizza.prices[0]}</label>
         <label className="ms-3 fw-bold text-info"><s>$3.15</s></label>
        </div>
    
    
      
      
   
  
  
  
  
</div>

       
      </div>
      </Link>
      
      
      
    );
  };
  
  export default Pizzacard;


  