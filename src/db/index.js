import mongoose from "mongoose";
import { db_name } from "../constant.js";

export const db_connected = async () => {
          try {
            const connectionUri = await mongoose.connect(`${process.env.MONGODB_URI} / ${db_name}`)
              console.log("connectinUri :",connectionUri.connection.host);
              
          } catch (error) {
                console.error(`Database connection failed : ${error}`);
                throw error()
          }
}