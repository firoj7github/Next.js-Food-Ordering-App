import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import { useSelector} from 'react-redux'
import Link from "next/link";
export const Navbar = () => {
  const quantity = useSelector(state=>state.cart.quantity);
  return (
    <div>
      <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image  src="/image/telephone.png" alt="" width="32" height="32" />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW!</div>
          <div className={styles.text}>034 015</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <Link href="/">
         <a> FoodWorld </a>
          </Link>
          </ul>
      </div>
      
      <form className={styles.search}>
        <input className="form-control" type="search" placeholder="Search" width="200px" aria-label="Search"></input>
        
      </form>
    
      <Link href="/Cart">
      <div className={styles.item}>
        <div className={styles.cart}>
          <Image src="/image/cart.png" alt="" width="30px" height="30px" />
          <div className={styles.counter}>{quantity}</div>
        </div>
      </div>
      </Link>
    </div>
    
      </div>
  )
}
