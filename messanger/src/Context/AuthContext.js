import { useState, useEffect, useContext, createContext } from "react";
import { auth } from "../components/Firebase/firebase";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) =>{
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        auth.onAuthStateChanged((user) =>{
            setUser(user);
            setLoading(false);
            if(user){
                navigate("/chat");
            }
        })
    }, [user,navigate]);

    const value = { user };

    return(
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}