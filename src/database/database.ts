import mongoose, { ConnectOptions } from 'mongoose';
import config from '../config';

(async () => {

    try {
        
        const mongooseOptions: ConnectOptions = {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false
        }
    
        const db = await mongoose.connect(`mongodb://${config.MONGO_HOST}/${config.MONGODB_DATABASE}`, mongooseOptions);
        console.log('database is connected', db.connection.name)

    } catch (error) {
        console.log(error)
    }
    
})()