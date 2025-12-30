import {Inngest} from 'inngest';
import {connectDB} from './db.js';
import User from '../models/user.js';



export const inngest=new Inngest({id:"interviewX"})

const syncUser=inngest.createFunction(
    {id:"sync-user"},
    {event:'clerk/user.created'},
    async({event})=>{
        await connectDB();

        const {id,first_name,last_name,email_addresses,image_url}=event.data;
        const newUser={
            clerkId:id,
            email:email_addresses[0]?.email_address,
            name:`${first_name||""} ${last_name||""}`,
            profileImage:image_url
        }
        await User.create(newUser);
    }

)

const deleteUserFromDB=inngest.createFunction(
    {id:"delete-user-from-db"},
    {event:'clerk/user.created'},
    async({event})=>{
        await connectDB();

        const {id}=event.data;
        await User.cre({clerkId:id});
        //todo something else
    }
)
export const functions=[syncUser,deleteUserFromDB];