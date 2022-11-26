import styles from "../styles/Footer.module.css";
import Image from "next/image";
export const Footer = () => {
  return (
    <div>
      <footer className="text-white" >
  
  <div className="bg-success">
   
    <section className={styles.side1}>
      <div className="row ">
        <h1 className={styles.footer_header}>Pizza Shop Here</h1>
        <div className="col-lg-2 col-md-2 mb-3 ">
          <div
            className={styles.side}
            data-ripple-color="light"
          >
            <Image src="/image/p.jpg" width='200' height='150' alt="" />
            
          </div>
        </div>
        <div className="col-lg-2 col-md-12 mb-3 mb-md-0">
          <div
            className="bg-image hover-overlay ripple shadow-1-strong rounded"
            data-ripple-color="light"
          >
            <Image src="/image/p2.jpg" width='200' height='150' alt="" />
           
          </div>
        </div>
        <div className="col-lg-2 col-md-12 mb-3 mb-md-0">
          <div
            className="bg-image hover-overlay ripple shadow-1-strong rounded"
            data-ripple-color="light"
          >
            <Image src="/image/p3.jpg" width='200' height='150' alt="" />
           
          </div>
        </div>
        <div className="col-lg-2 col-md-12 mb-3 mb-md-0">
          <div
            className="bg-image hover-overlay ripple shadow-1-strong rounded"
            data-ripple-color="light"
          >
            <Image src="/image/p4.jpg" width='200' height='150' alt="" />
            
          </div>
        </div>
        <div className="col-lg-2 col-md-12 mb-3 mb-md-0">
          <div
            className="bg-image hover-overlay ripple shadow-1-strong rounded"
            data-ripple-color="light"
          >
            <Image src="/image/p5.jpg" width='200' height='150' alt="" />
           
          </div>
        </div>
        <div className="col-lg-2 col-md-12 mb-3 mb-md-0">
          <div
            className="bg-image hover-overlay ripple shadow-1-strong rounded"
            data-ripple-color="light"
          >
            <Image src="/image/p6.jpg" width='200' height='150' alt="" />
           
          </div>
        </div>
      </div>
    </section>
    <section className={styles.side2}>
      <div className="row ">
       
        <div className="col-lg-2 col-md-12 mb-2 mt-5 mb-md-0">
          <div
            className="bg-image hover-overlay ripple shadow-1-strong rounded"
            data-ripple-color="light"
          >
            <Image  src="/image/p5.jpg" width='200' height='150' alt="" />
            
          </div>
        </div>
        <div className="col-lg-2 col-md-12 mb-2 mt-5 mb-md-0">
          <div
            className="bg-image hover-overlay ripple shadow-1-strong rounded"
            data-ripple-color="light"
          >
            <Image src="/image/p4.jpg" width='200' height='150' alt="" />
            
          </div>
        </div>
        <div className="col-lg-2 col-md-12 mb-2 mt-5 mb-md-0">
          <div
            className="bg-image hover-overlay ripple shadow-1-strong rounded"
            data-ripple-color="light"
          >
            <Image src="/image/p.jpg" width='200' height='150' alt="" />
           
          </div>
        </div>
        <div className="col-lg-2 col-md-12 mb-2 mt-5 mb-md-0">
          <div
            className="bg-image hover-overlay ripple shadow-1-strong rounded"
            data-ripple-color="light"
          >
            <Image src="/image/p2.jpg" width='200' height='150' alt="" />
           
          </div>
        </div>
        <div className="col-lg-2 col-md-12 mb-2 mt-5 mb-md-0">
          <div
            className="bg-image hover-overlay ripple shadow-1-strong rounded"
            data-ripple-color="light"
          >
            <Image src="/image/p3.jpg" width='200' height='150' alt="" />
           
          </div>
        </div>
        <div className="col-lg-2 col-md-12 mb-2 mt-5 mb-md-0">
          <div
            className="bg-image hover-overlay ripple shadow-1-strong rounded"
            data-ripple-color="light"
          >
            <Image src="/image/p2.jpg" width='200' height='150' alt="" />
           
          </div>
        </div>
      </div>
    </section>
  
  </div>


  
  <section className=" bg-black">
    <div className="container text-center text-md-start ">
     
      <div className="row ">
       
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
       
          <h6 className="text-uppercase fw-bold mb-4 mt-3">
            <i className="fas fa-gem  text-secondary "></i>Company name
          </h6>
          <p>
            Here you can use rows and columns to organize your footer content. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
       
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
    
          <h6 className="text-uppercase fw-bold mb-4 mt-3">
            Products
          </h6>
          <p>
            <a href="#!" className="text-reset">Potato pizza</a>
          </p>
          <p>
            <a href="#!" className="text-reset">pizza fai</a>
          </p>
          <p>
            <a href="#!" className="text-reset">cikhen pizza</a>
          </p>
          <p>
            <a href="#!" className="text-reset">pizza muthun</a>
          </p>
        </div>
      
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
    
          <h6 className="text-uppercase fw-bold mb-4 mt-3">
            Useful links
          </h6>
          <p>
            <a href="#!" className="text-reset">Pricing</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Settings</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Orders</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Help</a>
          </p>
        </div>
      
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
      
          <h6 className="text-uppercase fw-bold mb-4 mt-3">Contact</h6>
          <p><i className="fas fa-home  text-secondary"></i> Kushtia, NS Road 10012</p>
          <p>
            <i className="fas fa-envelope  text-secondary"></i>
            info@example.com
          </p>
          <p><i className="fas fa-phone  text-secondary"></i> + 04 234 567 88</p>
          <p><i className="fas fa-print  text-secondary"></i> + 05 234 567 89</p>
        </div>
        
      </div>
      
    </div>
  </section>

</footer>
    </div>
  )
}
