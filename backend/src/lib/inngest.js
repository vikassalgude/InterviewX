import {Inngest} from 'inngest';
import {connectDB} from './db.js';
import User from '../models/User.js';
import { deleteStreamUser, upsertStreamUser } from './stream.js';



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
        // This finds the user by clerkId and updates them, or creates them if they don't exist
        await User.findOneAndUpdate({ clerkId: id }, newUser, { upsert: true });
        // await User.create(newUser);

        await upsertStreamUser({
            id:newUser.clerkId.toString(),
            name:newUser.name,
            image:newUser.profileImage
        });
    }

)
const updateUser = inngest.createFunction(
    { id: "update-user" },
    { event: "clerk/user.updated" },
    async ({ event }) => {
        await connectDB();
        const { id, first_name, last_name, email_addresses, image_url } = event.data;
        const updatedData = {
            email: email_addresses[0]?.email_address,
            name: `${first_name || ""} ${last_name || ""}`.trim(),
            profileImage: image_url,
        };
        await User.findOneAndUpdate({ clerkId: id }, updatedData);
        //todo
        await upsertStreamUser({
            id: id.toString(),
            name: updatedData.name,
            image: updatedData.profileImage
        });
    }
);
const deleteUserFromDB=inngest.createFunction(
    {id:"delete-user-from-db"},
    {event:'clerk/user.deleted'},
    async({event})=>{
        await connectDB();

        const {id}=event.data;
        await User.deleteOne({clerkId:id});
        //todo something else
        
        await deleteStreamUser(id.toString());
    }
)
export const functions=[syncUser,deleteUserFromDB,updateUser];