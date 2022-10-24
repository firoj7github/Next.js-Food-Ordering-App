import styles from "../styles/Pizzacard.module.css";
import Image from "next/image";



const Pizzacard = () => {
    return (
      
      <div className="container-xl">
        <div className="row row-cols-1 row-cols-md-3 g-4 ">
  <div className="col">
    <div className="card shadow-sm bg-danger">
    <h5 className="mt-2 ms-2 text-info">-10%</h5>
      <Image src="/image/13.png" className="card-img-top" width="300" height="296" alt="..."/>
      <div className="card-body">
        <h5 className="card-title ms-5 text-white fs-4 fw-bold">Potato Pizza</h5>
        <label class="ms-5 fs-4 fw-bold text-white">$4.00</label>
        <label class="ms-3 fw-bold text-info"><s>$3.15</s></label>
      
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card shadow-sm bg-danger">
    <h5 className="mt-2 ms-2 text-info">-12%</h5>
      <Image src="/image/10.png" className="card-img-top" width="420" height="350" alt="..."/>
      <div className="card-body">
        <h5 className="card-title fs-4 text-white ms-5 fw-bold">Vegitable Barger</h5>
        <label class="ms-5 fs-4 fw-bold text-white">$7.12</label>
        <label class="ms-3 fw-bold text-info"><s>$2.60</s></label>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card shadow-sm bg-danger">
    <h5 className="mt-2 ms-2 text-info">-18%</h5>
      <Image src="/image/11.png" className="card-img-top" width="300" height="294" alt="..."/>
      <div className="card-body">
        <h5 className="card-title ms-5 fs-4 fw-bold text-white">Pizza fai</h5>
        <label class="ms-5 fs-4 fw-bold text-white">$2.00</label>
        <label class="ms-3 fw-bold text-info"><s>$1.10</s></label>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card shadow-sm bg-danger">
    <h5 className="mt-2 ms-2 text-info">-15%</h5>
      <Image src="/image/14.png" className="card-img-top" width="350" height="300" alt="..."/>
      <div className="card-body">
        <h5 className="card-title fs-4 ms-5 text-white fw-bold">Oliv Pizza</h5>
        <label class="ms-5 fs-4 fw-bold text-white">$6.11</label>
        <label class="ms-3 fw-bold text-info"><s>$2.30</s></label>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card shadow-sm bg-danger">
      <h5 className="mt-2 ms-2 text-info">-20%</h5>
      <Image src="/image/15.png" className="card-img-top" width="350" height="300" alt="..."/>
      <div className="card-body">
        <h5 className="card-title fs-4 ms-5 text-white fw-bold">Ciken Barger</h5>
        <label class="ms-5 fs-4 fw-bold text-white">$5.60</label>
        <label class="ms-3 fw-bold text-info"><s>$3.30</s></label>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card shadow-sm bg-danger">
    <h5 className="mt-2 ms-2 text-info">-25%</h5>
      <Image src="/image/16.png" className="card-img-top" width="350" height="300" alt="..."/>
      <div className="card-body">
        <h5 className="card-title fs-4 text-white ms-5 fw-bold">Matun Barger</h5>
        <label class="ms-5 fs-4 fw-bold text-white">$10.33</label>
        <label class="ms-3 fw-bold text-info"><s>$8.40</s></label>
      </div>
    </div>
  </div>
</div>
      </div>
      
      
    );
  };
  
  export default Pizzacard;
