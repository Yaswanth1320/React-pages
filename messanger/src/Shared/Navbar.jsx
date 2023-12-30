import styles from "../components/Chat/Chat.module.css";
import { auth } from "../components/Firebase/firebase";
import logo from "../Images/logo.png"
import { Link,useNavigate } from "react-router-dom";
import { IoLogOut } from "react-icons/io5";
import { FaCircleUser } from "react-icons/fa6";

export default function Navbar() {
    const navigate = useNavigate();

    const handleLogout = async(e) =>{
        await auth.signOut();
        navigate("/");
    }
  return (
    <nav className={styles.navbar}>
      <div className={styles.image}>
        <img src={logo} alt="logo" width="45px" height="45px" />
        <p className={styles.title}>Messanger</p>
      </div>
      <div className={styles.link}>
        <Link to="/profile">
          <FaCircleUser className={styles.icon} />
          Profile
        </Link>
        <button onClick={handleLogout}>
          <IoLogOut className={styles.icon} />
          Logout
        </button>
      </div>
    </nav>
  );
}
