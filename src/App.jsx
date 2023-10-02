import { useState } from 'react'
import { Routes, Route} from 'react-router-dom'
import Posts from "./pages/Posts"
import Register from "./pages/Register"
import Profile from "./pages/Profile"
import Login from './pages/Login'
import NavBar from './components/navBar'
import CreatePost from './pages/create'
//app will need authentication token that is shared by all routes
function App() {
  const [token, setToken]=useState(localStorage.getItem('token'));

  return (
    <div>
      <NavBar setToken={setToken} token= {token}></NavBar>
      <Routes>
        <Route path="/create" element ={<CreatePost token={token}/>} />
        <Route path="/" element ={<Posts token={token}/>} />
        <Route path="/profile" element ={<Profile token={token}/>} />
        <Route path="/login" element ={<Login setToken={setToken}/>} />
        <Route path="/register" element ={<Register setToken={setToken}/>} />
      </Routes>
    </div>
  )
}

export default App
