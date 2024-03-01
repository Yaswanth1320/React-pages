import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signin from "./pages/signin/Signin";
import { Route,Routes } from 'react-router-dom'

function App() {
  return (
    <div className="h-[100vh] p-4 flex items-center justify-center bg-[#3a86ff]">
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route  path="/login" element={<Login />} />
        <Route  path="/signin" element={<Signin />} />
      </Routes>
    </div>
  );
}

export default App;
