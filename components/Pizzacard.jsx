import Image from "next/image";
import styles from "../styles/Pizzacard.module.css";

const Pizzacard = () => {
    return (
      
      <div className="container-xl">
        <div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <div className="card shadow-sm">
    <h5 className="mt-2 ms-2 text-info">-10%</h5>
      <Image src="/image/6.jpg" className="card-img-top" width="300" height="296" alt="..."/>
      <div className="card-body">
        <h5 className="card-title ms-5 fw-bold">Potato Pizza</h5>
        <label class="ms-5 fs-4 fw-bold text-success">$4.00</label>
        <label class="ms-3 fw-bold text-danger"><s>$3.15</s></label>
      
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card shadow-sm">
    <h5 className="mt-2 ms-2 text-info">-12%</h5>
      <Image src="/image/1.jpg" className="card-img-top" width="420" height="350" alt="..."/>
      <div className="card-body">
        <h5 className="card-title ms-5 fw-bold">Vegitable Barger</h5>
        <label class="ms-5 fs-4 fw-bold text-success">$4.00</label>
        <label class="ms-3 fw-bold text-danger"><s>$3.15</s></label>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card shadow-sm">
    <h5 className="mt-2 ms-2 text-info">-18%</h5>
      <Image src="/image/2.jpg" className="card-img-top" width="300" height="294" alt="..."/>
      <div className="card-body">
        <h5 className="card-title ms-5 fw-bold">Pizza fai</h5>
        <label class="ms-5 fs-4 fw-bold text-success">$4.00</label>
        <label class="ms-3 fw-bold text-danger"><s>$3.15</s></label>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card shadow-sm">
    <h5 className="mt-2 ms-2 text-info">-15%</h5>
      <Image src="/image/4.jpg" className="card-img-top" width="350" height="300" alt="..."/>
      <div className="card-body">
        <h5 className="card-title ms-5 fw-bold">Oliv Pizza</h5>
        <label class="ms-5 fs-4 fw-bold text-success">$4.00</label>
        <label class="ms-3 fw-bold text-danger"><s>$3.15</s></label>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card shadow-sm">
      <h5 className="mt-2 ms-2 text-info">-20%</h5>
      <Image src="/image/3.jpg" className="card-img-top" width="350" height="300" alt="..."/>
      <div className="card-body">
        <h5 className="card-title ms-5 fw-bold">Ciken Barger</h5>
        <label class="ms-5 fs-4 fw-bold text-success">$4.00</label>
        <label class="ms-3 fw-bold text-danger"><s>$3.15</s></label>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card shadow-sm">
    <h5 className="mt-2 ms-2 text-info">-25%</h5>
      <Image src="/image/5.jpg" className="card-img-top" width="350" height="300" alt="..."/>
      <div className="card-body">
        <h5 className="card-title ms-5 fw-bold">Matun Barger</h5>
        <label class="ms-5 fs-4 fw-bold text-success">$4.00</label>
        <label class="ms-3 fw-bold text-danger"><s>$3.15</s></label>
      </div>
    </div>
  </div>
</div>
      </div>
      
      
    );
  };
  
  export default Pizzacard;
