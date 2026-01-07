
import { SignInButton, SignOutButton, UserButton,SignedIn,SignedOut, useUser } from '@clerk/clerk-react'
import { Navigate, Route,Routes } from 'react-router';
import HomePage from './pages/HomePage';
import ProblemsPage from './pages/ProblemsPage';
import DashBoardPage from './pages/DashBoardPage';
import { Toaster } from 'react-hot-toast';
function App() {
  
  const {isSignedIn,isLoaded}=useUser()
  // for getting rid of flickering effect
  if(!isLoaded)return null
  return (
    <>
    <Routes>

      <Route path='/' element={!isSignedIn?<HomePage/>:<Navigate to ={'/dashboard'}/>}/>

      <Route path='/dashboard' element={isSignedIn?<DashBoardPage/>:<Navigate to ={'/'}/>}/>

      <Route path='/problems' element={isSignedIn?<ProblemsPage/>:<Navigate to ={'/'}/>}/>

    </Routes>
    <Toaster toastOptions={{duration:3000}}/>
    </>
  )
}

export default App

//tailwind, daisyui ,react-toast-router,react-router
//next
//todo: react-query aka tankstack query,axios