import { useState } from 'react';
import { BsSend } from 'react-icons/bs'
import useSendMessage from '../../Hooks/useSendMessage';

const MsgInput = () => {
  const [message,setMessage] = useState('')
  const {loading,sendMessage} = useSendMessage();

  const handleSubmit = async(e) =>{
    e.preventDefault();
    if(!message) return;
    await sendMessage(message);
    setMessage("");
  }
  return (
    <form className="my-3 px-4" onSubmit={handleSubmit}>
      <div className="w-full relative">
        <input
          type="text"
          className="border rounded-full outline-none w-full block p-2.5 bg-[#f5f5f5] text-sm text-black"
          placeholder="Send a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          className="flex item-center pe-3 absolute inset-y-3 end-1"
        >
          {loading ? (
            <div className="loading loading-spinner"></div>
          ) : (
            <BsSend />
          )}
        </button>
      </div>
    </form>
  );
}

export default MsgInput
