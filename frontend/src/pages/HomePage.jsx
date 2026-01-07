import {
  SignedOut,
  SignInButton,
  SignOutButton,
  SignedIn,
  UserButton
} from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

function HomePage() {
  // // fetch some data -without using tanstack
  // const [books,setBooks]=useState([]);
  // const [isLoading ,setIsLoading]=useState(true);
  // const [error,setError]=useState(null);
  // useEffect(()=>{
     
  //   const getBooks=async()=>{
  //     isLoading(true)
  //     try {
  //       const res=await fetch('/api/books');
  //       const data=await res.json()
  //       setBooks(data);
  //     } catch (error) {
  //       setError(error)
  //     }
  //     finally{
  //       isLoading(false);
  //     }
  //   }
  //   getBooks()
  //   //refecth
  //   //when you look at window tantack fetches data again
  // },[])
  // //with tankstack
  // const {data,isLoading,error}=useQuery({
  //   queryFn:()=>await fetch('/api/books').then(res=>res.json())
  // })

  return (

    <div>
      <button
        className="btn btn-secondary"
        onClick={() => toast.success("This is a success toast")}
      >
        Click Me
      </button>

      <SignedOut>
        <SignInButton mode="modal">
          <button>Login</button>
        </SignInButton>
      </SignedOut>

      <SignedIn>
        <SignOutButton>
          <button>Logout</button>
        </SignOutButton>

        <UserButton />
      </SignedIn>
    </div>
  );
}

export default HomePage;
