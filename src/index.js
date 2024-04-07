// require('dotenv').config({ path: './env' });  can use but not for production

import dotenv from 'dotenv';
import connectToDatabase from './db/index.js';
import { app } from './app.js';

dotenv.config({ path: './env' });


connectToDatabase()
.then( () => {
    app.listen(process.env.PORT || 8000 , () => {
        console.log(`Server is listrning on port ${process.env.PORT}`)
    });
})
.catch((error) => {
    console.log("MongoDb connection failed !! ", error)
});










// This another approach to connect to the database and start the server

// const app = express();

// ( async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error", (error) => {
//             console.log("ERROR: ", error)
//             throw error;
//         });

//         app.listen(process.env.PORT, () => {
//             console.log(`Server is listrning on port ${process.env.PORT}`)
//         });

//     } catch (error) {
//         console.log("ERROR: ", error)
//         throw error;
//     }
// } )();