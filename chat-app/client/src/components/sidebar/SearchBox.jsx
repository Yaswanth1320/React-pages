import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import useConversation from "../../store/useConversation";
import useGetConversation from "../../Hooks/useGetConversation";
import toast from "react-hot-toast";

export default function SearchBox() {
  const [search, setSearch] = useState();
  const { conversations } = useGetConversation();
  const { setSelectedConversation } = useConversation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3) {
      return toast.error("Search atleast must be three letters");
    }

    const conversation = conversations.find((c) =>
      c.fullName.toLowerCase().includes(search.toLowerCase())
    );

    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else toast.error("No such user found!");
  };

  return (
    <form className="flex items-center gap-2" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search..."
        className="input input-bordered rounded-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        type="submit"
        className="btn btn-circle bg-[#3a86ff] border-[#3a86ff] text-white"
      >
        <IoSearchOutline className="text-xl" />
      </button>
    </form>
  );
}
