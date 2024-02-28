import Conversations from "./Conversations";
import Logout from "./Logout";
import SearchBox from "./SearchBox";

export default function SideBar() {
  return (
    <div className="flex flex-col border-r border-slate-500 p-4">
      <SearchBox />
      <div className="divider px-3"></div>
      <Conversations />
      <Logout />
    </div>
  );
}
