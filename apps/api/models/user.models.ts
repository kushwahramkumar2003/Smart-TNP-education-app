import mongoose,{Schema} from  'mongoose';
import { string } from 'zod';
// const userSchema = new mongoose.Schema({},{timestamps:true})

const userSchema = new  Schema(
    {
        userName: {
            type : String,
            required : true,
            // validate : string().min(3).max(20),
        },
        email : {
            type : String ,
            required : true,
        },
        password : {
            type : String ,
            required : true,
        },
        
        }
)