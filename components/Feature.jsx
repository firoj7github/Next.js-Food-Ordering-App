import Image from "next/image";

export const Feature = () => {
  return (
    <div>
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <Image src="/image/2000.jpg" class="d-block " width='1400' height='400' alt="..."/>
    </div>
    
  </div>
</div>
    </div>
  )
}
