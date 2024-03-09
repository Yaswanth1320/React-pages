import Messages from "./Messages"
import MsgInput from "./MsgInput"
import { NoChat } from "./NoChat";
import useConversation from "../../store/useConversation";
import { useEffect } from "react";

export const MsgContainer = () => {
    const { selectedConversation, setSelectedConversation } = useConversation();

    useEffect(() => {

      return () => setSelectedConversation(null);
    },[setSelectedConversation])
  return (
    <div className="flex flex-col md:min-w-[450px]">
      {!selectedConversation ? (
        <NoChat />
      ) : (
        <>
          <div className="mb-2 px-4 py-2 bg-[#f5f5f5]">
            <span className="label-text">To: </span>
            <span className="text-gray-900 font-bold">
              {selectedConversation.fullName}
            </span>
          </div>
          <Messages />
          <MsgInput />
        </>
      )}
    </div>
  );
}
