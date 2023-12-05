import mongoose from 'mongoose';
export const connectToDB = async () => {

/*   Mongoose readyState
   ready states being:

     0: disconnected
     1: connected
     2: connecting
     3: disconnecting

**/


    const connection = {};
    try {
        if(connection.isConnected) return;
    
        const db = await mongoose.connect(process.env.MONGO_URL);
     //    console.log(` readyState: ${db.connection.readyState}`);
     //   readyState   1 = connected
       // connection.isConnected = db.connection.readyState;
        connection.isConnected = db.connections[0].readyState;

      } catch (error) {
        throw new Error(error);
         // handleError(error);
      }  
}