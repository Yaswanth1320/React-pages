import { TiMessages } from 'react-icons/ti'
import { useAuthContext } from '../../Context/AuthContext'

export const NoChat = () => {
  const { authUser } = useAuthContext();
  return (
    <div className="flex items-center justify-center w-full h-full">
        <div className="flex flex-col items-center gap-2 px-4 text-center sm:text-lg md:text-xl font-semibold">
            <p>Welcome 👋 {authUser.fullName} </p>
            <p>Select a chat to start Conversation</p>
            <TiMessages className='text-2xl md:text-4xl text-center' />
        </div>
    </div>
  )
}
