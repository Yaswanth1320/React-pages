import { BsSend } from 'react-icons/bs'

const MsgInput = () => {
  return (
    <form className="my-3 px-4">
      <div className="w-full relative">
        <input
          type="text"
          className="border rounded-full outline-none w-full block p-2.5 bg-[#f5f5f5] text-sm"
          placeholder="Send a message"
        />
        <button type="submit" className="flex item-center pe-3 absolute inset-y-3 end-1">
            <BsSend />
        </button>
      </div>
    </form>
  );
}

export default MsgInput
