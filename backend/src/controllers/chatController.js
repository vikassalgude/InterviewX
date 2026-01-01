export async function getStreamToken(req,res) {
    try {
        // why not user._id (mongodb id) coz when we save the user we use clerk id it should ,match with the stream id
        //use clerkid for  stream (not mongodb)->it should match the id we have in  in stream dashboard
        const token=chatClient.createToken(req.user.clerkId);
        res.status(200).json({
            token,
            userId:req.user.clerkId,
            name:req.user.name,
            userImage:req.user.image
        })
    }
    catch(error){
        console.log("Error in getStreamController",error);
        res.status(500).json({message:"internal server error"});
    }
}