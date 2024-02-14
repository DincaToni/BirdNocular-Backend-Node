import { MongoClient, ServerApiVersion } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const URI: string = process.env.DB_CONN_STRING || "";
const client: MongoClient = new MongoClient(URI, {
  minPoolSize: 2,
  maxPoolSize: 15,
}); // look into connection options

const run = async () => {
  try {
    await client.connect();

    await client.db("Development").command({ ping: 1 });
    console.log("Successfully connected to MongoDB!");
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
    console.log("DB connection closed!");
  }
};

export { run, client };
