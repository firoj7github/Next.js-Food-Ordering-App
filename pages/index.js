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
 
  const res = await axios.get (`${baseUrl}/api/products`);
  


  return { 
    props: 
   {
     pizzalist:res.data,
   },
  };
};