import usegetMessages from "../../Hooks/usegetMessages";
import Message from "./Message";
import SkeletonLoader from "../Loaders/SkeletonLoader.jsx";
import { useEffect, useRef } from "react";

const Messages = () => {
  const { messages, loading } = usegetMessages();
  const lastref = useRef();

  useEffect(() => {
    setTimeout(() => {
      lastref.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);

  return (
    <div className="flex-1 px-4 overflow-auto">
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id} ref={lastref}>
            <Message message={message} />
          </div>
        ))}

      {loading && [...Array(3).map((_, idx) => <SkeletonLoader key={idx} />)]}
      {!loading && messages.length == 0 && (
        <p className="text-center">start your conversation</p>
      )}
    </div>
  );
};

export default Messages;
