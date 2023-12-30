import { useNavigate } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";
import { auth } from "../Firebase/firebase";
import styles from "./Chat.module.css";
import Navbar from "../../Shared/Navbar";
import { useAuth } from "../../Context/AuthContext.js"

function Chat() {
  const { user } = useAuth();
  console.log(user)
  return (
    <div className={styles.container}>
      <Navbar />
      <ChatEngine
        height="calc(100vh - 66px)"
        projectId="67610727-6415-48f6-9391-45b1a7b40c8b"
        userName="."
        userSecret="."
      />
    </div>
  );
}

export default Chat;
