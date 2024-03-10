import { useAuthContext } from "../../Context/AuthContext";
import useConversation from "../../store/useConversation";
import { extractTime } from '../sidebar/DateTime.js';

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const extractedTime = extractTime(message?.createdAt);
  const sender = message?.senderId == authUser._id;
  const chatSide = sender ? "chat chat-end" : "chat chat-start";
  const displayPic = sender
    ? authUser.profilePic
    : selectedConversation?.profilePic;
  const chatBubble = sender ? "bg-[#3a86ff]" : "";

  return (
    <div className={`chat ${chatSide}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS chat bubble component" src={displayPic} />
        </div>
      </div>
      <div className={`chat-bubble text-white ${chatBubble}`}>
        {message?.message}
      </div>
      <div className="chat-footer opacity-50 text-[0.6rem] text-black flex gap-1 items-center">
        {extractedTime}
      </div>
    </div>
  );
};

export default Message;
