import Messages from "./Messages";
import MsgInput from "./MsgInput";
import { NoChat } from "./NoChat";
import useConversation from "../../store/useConversation";
import { useEffect } from "react";
import { IoIosVideocam } from "react-icons/io";
import { MdCall } from "react-icons/md";

export const MsgContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);
  return (
    <div className="flex flex-col md:min-w-[450px]">
      {!selectedConversation ? (
        <NoChat />
      ) : (
        <>
          <div className="mb-2 px-4 py-2 bg-[#f5f5f5]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 justify-center">
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS chat bubble component"
                    src={selectedConversation.profilePic}
                  />
                </div>
                <span className="text-gray-900 font-bold">
                  {selectedConversation.fullName}
                </span>
              </div>
              <div className="flex gap-2">
                <IoIosVideocam className="w-6 h-6 text-[#3a86ff]" />
                <MdCall className="w-6 h-6 text-[#3a86ff]" />
              </div>
            </div>
          </div>
          <Messages />
          <MsgInput />
        </>
      )}
    </div>
  );
};
