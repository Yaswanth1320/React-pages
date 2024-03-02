import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signin from "./pages/signin/Signin";
import { Route,Routes,Navigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { useAuthContext } from "./Context/AuthContext";

function App() {
  const {authUser} =useAuthContext();
  return (
    <div className="h-[100vh] p-4 flex items-center justify-center bg-[#3a86ff]">
      <Routes>
        <Route path="/" element={authUser ? <Home/> : <Navigate to={"/login"} /> } />
        <Route path="/login" element={authUser ? <Navigate to='/' /> : <Login />} />
        <Route path="/signin" element={authUser ? <Navigate to='/' /> : <Signin />} />
      </Routes>
      <Toaster position="bottom-right" reverseOrder={false} />
    </div>
  );
}

export default App;
