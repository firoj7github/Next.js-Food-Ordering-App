import styles from "../../styles/Product.module.css";
import Image from "next/image";
import {useDispatch } from 'react-redux'
import { addProduct } from "../../redux/cartSlics";
import { useState } from "react";
import baseUrl from '../../helpers/baseUrl'




 const Product = ({product}) => {
  const [price, setPrice]= useState(product.prices[0]);
  const [quantity, setQuantity]= useState(1);
 
  const [extras, setExtras]= useState([]);
  const dispatch = useDispatch();
   const handleClick= ()=>{
    dispatch(addProduct({...product, extras, price, quantity}));
   }
  
    
      return (
        <div className={styles.container}>
          <div className={styles.left}>
            <div className={styles.imgContainer}>
              <Image className="bg-danger rounded" src={product.img} width="350px" height="356px" alt="image" />
            </div>
          </div>
          <div className={styles.right}>
            <h3 className={styles.title}>{product.title}</h3>
            <span className={styles.price}>Price :
            ${product.prices[0]}</span>
            <p className={styles.desc}>{product.desc}</p>
            <h3 className={styles.choose}>Choose the size</h3>
            <div className={styles.sizes}>
              <div className={styles.size} onClick={() => setSize(0)}>
                <Image src="/image/size.png" layout="fill" alt="" />
                <span className={styles.number}>Small</span>
              </div>
              <div className={styles.size} onClick={() => setSize(1)}>
                <Image src="/image/size.png" layout="fill" alt="" />
                <span className={styles.number}>Medium</span>
              </div>
              <div className={styles.size} onClick={() => setSize(2)}>
                <Image src="/image/size.png" layout="fill" alt="" />
                <span className={styles.number}>Large</span>
              </div>
            </div>
            <h3 className={styles.choose}>Choose additional ingredients</h3>
            <div className={styles.ingredients}>
              <div className={styles.option}>
                <input
                  type="checkbox"
                  id="double"
                  name="double"
                  className={styles.checkbox}
                />
                <label htmlFor="double">Double Ingredients</label>
              </div>
              <div className={styles.option}>
                <input
                  className={styles.checkbox}
                  type="checkbox"
                  id="cheese"
                  name="cheese"
                />
                <label htmlFor="cheese">Extra Cheese</label>
              </div>
              <div className={styles.option}>
                <input
                  className={styles.checkbox}
                  type="checkbox"
                  id="spicy"
                  name="spicy"
                />
                <label htmlFor="spicy">Spicy Sauce</label>
              </div>
              <div className={styles.option}>
                <input
                  className={styles.checkbox}
                  type="checkbox"
                  id="garlic"
                  name="garlic"
                />
                <label htmlFor="garlic">Garlic Sauce</label>
              </div>
            </div>
            <div className={styles.add}>
                <input type="number" defaultValue={1} className={styles.quantity}/>
                <button className={styles.button} onClick={handleClick}>Add to Cart</button>
            </div>
          </div>
        </div>
      );
    };
    

    export default Product;
    
    export async function getServerSideProps({params:{id}}) {
 
      const res = await fetch(`${baseUrl}/api/product/${id}`);
      
      const data= await res.json()
    
      return { 
        props: 
       {
         product:data,
       },
      };
    };