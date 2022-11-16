require('dotenv').config();
import  express  from 'express';
import {createConnection}  from 'typeorm';
import {Client} from './entities/Client';
import {Banker} from './entities/Banker';
import { Transaction } from './entities/Transaction';
import root from './routes/index';

const app = express();
 
const main = async () => {
    try {
        await createConnection ({
            type: "postgres",
            host: "localhost",
            port: 5432,
            username: "postgres",
            password: "367912",
            database: "typeorm",
            entities: [Client, Banker, Transaction],
            synchronize: true
    
        });

        console.log('Connected to DB');
        app.use(express.json());
        app.use('/api', root);
        app.listen(3800, ()=>{
            console.log('Server is working on port 3800');
        })
    }
    catch(e) {
        console.log(e);
        throw new Error('Cannot connect to DB, please check');
    }
};


main();