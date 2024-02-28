import { MsgContainer } from "../../components/messages/MsgContainer";
import SideBar from "../../components/sidebar/SideBar";

export default function Home() {
  return (
    <div className="font-kanit flex sm:h-[450px] md:h-[500px] rounded-lg overflow-hidden bg-[#ffffff]">
      <SideBar />
      <MsgContainer />
    </div>
  );
}
