import { useState, useEffect } from "react";
import { StreamChat } from "stream-chat";
import toast from "react-hot-toast";
import { initializeStreamClient, disconnectStreamClient } from "../lib/stream";
import { sessionApi } from "../api/sessions";

function useStreamClient(session, loadingSession, isHost, isParticipant) {
  const [streamClient, setStreamClient] = useState(null);
  const [call, setCall] = useState(null);
  const [chatClient, setChatClient] = useState(null);
  const [channel, setChannel] = useState(null);
  const [isInitializingCall, setIsInitializingCall] = useState(true);

  useEffect(() => {
    let videoCall = null;
    let chatClientInstance = null;

    const initCall = async () => {
      if (!session?.callId) return;
      if (!isHost && !isParticipant) return;
         if(session.status==='completed')return;
      try {
        const { token, userId, userName, userImage } = await sessionApi.getStreamToken();

        const client = await initializeStreamClient(
          {
            id: userId,
            name: userName,
            image: userImage,
          },
          token
        );

        setStreamClient(client);

        videoCall = client.call("default", session.callId);
        await videoCall.join({ create: true });
        setCall(videoCall);

        const apiKey = import.meta.env.VITE_STREAM_API_KEY;
        chatClientInstance = StreamChat.getInstance(apiKey);

        await chatClientInstance.connectUser(
          {
            id: userId,
            name: userName,
            image: userImage,
          },
          token
        );
        setChatClient(chatClientInstance);

        const chatChannel = chatClientInstance.channel("messaging", session.callId);
        await chatChannel.watch();
        setChannel(chatChannel);
      } catch (error) {
        toast.error("Failed to join video call");
        console.error("Error init call", error);
      } finally {
        setIsInitializingCall(false);
      }
    };

    if (session && !loadingSession) initCall();

    // cleanup - performance reasons
    return () => {
      // iife
      (async () => {
        try {
          if (videoCall) await videoCall.leave();
          if (chatClientInstance) await chatClientInstance.disconnectUser();
          await disconnectStreamClient();
        } catch (error) {
          console.error("Cleanup error:", error);
        }
      })();
    };
  }, [session, loadingSession, isHost, isParticipant]);

// useEffect(() => {
//   let videoCall = null;
//   let chatClientInstance = null;
//   let isMounted = true; // 1. Add this flag

//   const initCall = async () => {
//     if (!session?.callId || (!isHost && !isParticipant)) return;

//     try {
//       const { token, userId, userName, userImage } = await sessionApi.getStreamToken();
      
//       if (!isMounted) return; // 2. Check flag after every 'await'

//       const client = await initializeStreamClient(
//         { id: userId, name: userName, image: userImage },
//         token
//       );
      
//       if (!isMounted) return;
//       setStreamClient(client);

//       videoCall = client.call("default", session.callId);
//       await videoCall.join({ create: true });
      
//       if (!isMounted) {
//         videoCall.leave(); // Cleanup if we unmounted during the join
//         return;
//       }
//       setCall(videoCall);

//       // ... rest of your chat client logic (apply the same isMounted checks)
      
//     } catch (error) {
//       if (isMounted) {
//         console.error("Error init call", error);
//       }
//     } finally {
//       if (isMounted) setIsInitializingCall(false);
//     }
//   };

//   if (session && !loadingSession) initCall();

//   return () => {
//     isMounted = false; // 3. Set flag to false immediately on unmount
    
//     // Use a simpler cleanup to avoid the "already left" error
//     if (videoCall) {
//       videoCall.leave().catch(err => console.debug("Silent leave:", err));
//     }
//     if (chatClientInstance) {
//       chatClientInstance.disconnectUser().catch(err => console.debug("Silent disc:", err));
//     }
//     // Only disconnect global client if you aren't using it elsewhere
//     disconnectStreamClient().catch(() => {});
//   };
// }, [session?.callId, loadingSession, isHost, isParticipant]);
// Added session.callId to dependencies instead of the whole object

  return {
    streamClient,
    call,
    chatClient,
    channel,
    isInitializingCall,
  };
}

export default useStreamClient;