import Head from 'next/head'

import { Banner } from '../components/Banner'
import { Feature } from '../components/Feature'
import Pizzalist from '../components/Pizzalist'
import axios from 'axios'
import baseUrl from '../helpers/baseUrl'


import styles from '../styles/Home.module.css'


export default function Home({pizzalist}) {
  return (
    <div className={styles.container}>

      <Head>
        <title>Food Order App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Banner></Banner>
      <Pizzalist pizzalist={pizzalist}/>
      <Feature></Feature>






    </div>
  )
}



export async function getServerSideProps() {
<<<<<<< HEAD
 
  const res = await axios.get (`${baseUrl}/api/products`);
  
=======

  const res = await axios.get ("https://next-js-food-ordering-app-45xt.vercel.app/api/products");
>>>>>>> f932c65b5b8d37fd1bfe5821fe7566033af0e3ef



  return {
    props:
   {
     pizzalist:res.data,
   },
  };
};