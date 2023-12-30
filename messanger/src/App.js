import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import { AuthProvider } from "./Context/AuthContext";
import Chat from "./components/Chat/Chat";

function App() {
  return (
    <div>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/chat" element={<Chat />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
