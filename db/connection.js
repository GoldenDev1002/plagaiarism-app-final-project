let mongoose = require("mongoose");
mongoose.set("strictQuery", true);
let dotenv = require("dotenv");
dotenv.config()

let connection = async ()=> {

   try{
   
    let connectionURL= await mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    
   console.log(`connected to ${connectionURL.connection.host}`)
   }catch(err){
    console.log(err.message);
    process.exit(1);
     
   }

}

module.exports = connection;