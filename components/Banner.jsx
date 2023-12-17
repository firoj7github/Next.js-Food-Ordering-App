import Image from "next/image";
import styles from "../styles/Banner.module.css";


export const Banner = () => {
  return (
    <div>
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className={styles.cover}>
      <Image  src="/image/banner.png" width="2200px" height="800px"   alt="banner image"/>
    </div>
    
  </div>
</div>

    </div>
  )
}

