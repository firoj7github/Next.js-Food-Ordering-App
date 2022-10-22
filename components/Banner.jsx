import Image from "next/image";

export const Banner = () => {
  return (
    <div>
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <Image src="/image/300.jpg " width="1400px" height="590px" className="d-block "  alt="..."/>
    </div>
    
  </div>
</div>

    </div>
  )
}

