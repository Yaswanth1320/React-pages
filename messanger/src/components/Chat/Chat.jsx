import { useRef, useState, useEffect } from "react";
import styles from './Chat.module.css'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";
import { useAuth } from '../../Context/AuthContext'
import Navbar from "../../Shared/Navbar"

export default function Chat() {
  const didMountRef = useRef(false);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const navigate = useNavigate();

  async function getFile(url) {
    let response = await fetch(url);
    let data = await response.blob();
    return new File([data], "test.jpg", { type: "image/jpeg" });
  }

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;

      if (!user || user === null) {
        navigate("/");
        return;
      }
      axios
        .get("https://api.chatengine.io/users/me/", {
          headers: {
            "project-id": "67610727-6415-48f6-9391-45b1a7b40c8b",
            "user-name": user.email,
            "user-secret": user.uid,
          },
        })

        .then(() => setLoading(false))

        .catch((e) => {
          let formdata = new FormData();
          formdata.append("email", user.email);
          formdata.append("username", user.email);
          formdata.append("secret", user.uid);

          getFile(user.photoURL).then((avatar) => {
            formdata.append("avatar", avatar, avatar.name);

            axios
              .post("https://api.chatengine.io/users/", formdata, {
                headers: {
                  "private-key": process.env.REACT_APP_CHAT_ENGINE_KEY,
                },
              })
              .then(() => setLoading(false))
              .catch((e) => console.log("e", e.response));
          });
        });
    }
  }, [user, navigate]);

  if (!user || loading) return <div />;

  return (
    <div className={styles.container}>
      <Navbar />
      <ChatEngine
        height="calc(100vh - 66px)"
        projectID="67610727-6415-48f6-9391-45b1a7b40c8b"
        userName={user.email}
        userSecret={user.uid}
      />
    </div>
  );
}
