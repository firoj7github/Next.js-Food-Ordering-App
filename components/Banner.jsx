import Image from "next/image";
import styles from "../styles/Banner.module.css";


export const Banner = () => {
  return (
    <div>
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className={styles.cover}>
      <Image  src="/image/banner.png " width="1480px" height="590px"   alt="..."/>
    </div>
    
  </div>
</div>

    </div>
  )
}

