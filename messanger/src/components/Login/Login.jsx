import './Login.module.css'
import styles from "./Login.module.css";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { FacebookAuthProvider, signInWithRedirect,GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../Firebase/firebase';

function Login() {

  const handleFacbook = async(e) =>{
    const provider = new FacebookAuthProvider()
    return signInWithRedirect(auth,provider)
  }

  const handleGoogle = async (e) => {
    const provider = new GoogleAuthProvider();
    return signInWithRedirect(auth, provider);
  };

  return (
    <div className={styles.container}>
      <div className={styles.login}>
        <h1 className={styles.heading}>Messanger</h1>
        <button onClick={handleGoogle} className={styles.button}>
          <FaGoogle />
          Continue with Gmail
        </button>
        <button onClick={handleFacbook} className={styles.button}>
          <FaFacebook />
          Continue with Facebook
        </button>
      </div>
    </div>
  );
}

export default Login
