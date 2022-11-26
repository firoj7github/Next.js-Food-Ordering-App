import Image from "next/image";

export const Feature = () => {
  return (
    <div>
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <Image src="/image/2000.jpg" className="d-block " width='1400' height='400' alt="..."/>
    </div>
    
  </div>
</div>
    </div>
  )
}
