import Conversations from "./Conversations";
import SearchBox from "./SearchBox";

export default function SideBar() {
  return (
    <div>
        <SearchBox />
        <div className="divider px-3"></div>
        <Conversations />
    </div>
  )
}
