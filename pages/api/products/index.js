import dbConnect from "../../../utils/connectMongo";
import Product from "../../../models/Product"



  

  dbConnect();

  export default (req,res)=> {
    Product.find().then(products=>{
      res.status(200).json(products);
    })
  }

  
    
  
