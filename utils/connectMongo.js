import mongoose from 'mongoose'

  function dbConnect() {

    if(mongoose.connections[0].readystate){
      console.log('already connected')
      return
    }
  mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true, 

    useUnifiedTopology: true 

  })
  mongoose.connection.on('connected', ()=>{
   console.log('mongo connected')
  })
  mongoose.connection.on('error', ()=>{
   console.log('mongo error')
  })
  
}

export default dbConnect












// dbfood
// 1Z89A1UPHlexgTlX