import { IoSearchOutline } from "react-icons/io5";

export default function SearchBox() {
  return (
    <form className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search..."
        className="input input-bordered rounded-full"
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
