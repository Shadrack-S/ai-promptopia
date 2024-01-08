import mongoose from "mongoose";

let isConnected =false;


export const connectToDb = async()=>{
    mongoose.set('strictQuery',true)

    if(isConnected){
        console.log("MongoDB is already connected");
        return;
    }
    try {
        
        await mongoose.connect("mongodb+srv://shadrackshibu007:UbZ41ERRNkoUNbtQ@cluster0.xfirrlz.mongodb.net/?retryWrites=true&w=majority",{
            dbName :"share_prompt",
            useUnifiedTopology:true,
        })
        isConnected = true;
        console .log('MONGODB Connected')
    } catch (error) {
        console.log("Some ERROR",error);
    }
}