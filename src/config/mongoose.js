import {connect} from 'mongoose';
import {MONGODB} from '../config';

(async () =>{  
    const db = await connect(MONGODB);
    console.log(db.connection.name);
})();
