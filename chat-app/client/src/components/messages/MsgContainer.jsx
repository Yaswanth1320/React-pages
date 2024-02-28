import Messages from "./Messages"
import MsgInput from "./MsgInput"
import { NoChat } from "./NoChat";

export const MsgContainer = () => {
    const noChat = true ;
  return (
    <div className="flex flex-col md:min-w-[450px]">
      {noChat ? (
        <NoChat />
      ) : (
        <>
          <div className="mb-2 px-4 py-2 bg-[#f5f5f5]">
            <span className="label-text">To:</span>
            <span className="text-gray-900 font-bold">John smith</span>
          </div>
          <Messages />
          <MsgInput />
        </>
      )}
    </div>
  );
}
