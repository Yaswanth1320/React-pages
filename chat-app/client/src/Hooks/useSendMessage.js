import { useState } from "react"
import useConversation from "../store/useConversation.js";
import toast from 'react-hot-toast'

const useSendMessage = () => {
  const [loading,setLoading] = useState(false);
  const {messages,setMessages,selectedConversation} = useConversation();

  const sendMessage = async(messages) =>{
    setLoading(true);
    try {
        
    } catch (error) {
        toast.error(error.message);
    }finally{
        setLoading(false);
    }
  }
}

export default useSendMessage
