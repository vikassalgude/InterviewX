// export async function getStreamToken(req,res) {
//     try {
//         // why not user._id (mongodb id) coz when we save the user we use clerk id it should ,match with the stream id
//         //use clerkid for  stream (not mongodb)->it should match the id we have in  in stream dashboard
//         const token=chatClient.createToken(req.user.clerkId);
//         res.status(200).json({
//             token,
//             userId:req.user.clerkId,
//             name:req.user.name,
//             userImage:req.user.image
//         })
//     }
//     catch(error){
//         console.log("Error in getStreamController",error);
//         res.status(500).json({message:"internal server error"});
//     }
// }
import { StreamChat } from 'stream-chat';

// 1. Initialize the client (Make sure environment variables are loaded)
const chatClient = StreamChat.getInstance(
  process.env.STREAM_API_KEY, 
  process.env.STREAM_API_SECRET
);
export async function getStreamToken(req, res) {
    try {
        // Ensure chatClient is initialized (see step 1 above)
        const token = chatClient.createToken(req.user.clerkId);
        
        res.status(200).json({
            token,
            userId: req.user.clerkId,
            userName: req.user.name, // Changed from 'name' to 'userName'
            userImage: req.user.profileImage
        });
    } catch (error) {
        console.error("Error in getStreamToken:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}