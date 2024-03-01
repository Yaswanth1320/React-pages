import { TiMessages } from 'react-icons/ti'

export const NoChat = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
        <div className="flex flex-col items-center gap-2 px-4 text-center sm:text-lg md:text-xl font-semibold">
            <p>Welcome 👋 John smith 🗿</p>
            <p>Select a chat to start Conversation</p>
            <TiMessages className='text-3xl md:text-6xl text-center' />
        </div>
    </div>
  )
}
