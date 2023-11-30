import { MongoClient,ServerApiVersion } from "mongodb";
import dotenv from 'dotenv';

dotenv.config();

const URI:string = process.env.DB_CONN_STRING || '';
const client:MongoClient = new MongoClient(URI) // look into connection options

const run = async() =>{
    try{
        await client.connect();

        await client.db("admin").command({ ping: 1 });        
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    }   finally{
        await client.close();
    }
}

export default run;