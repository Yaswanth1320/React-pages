import React, { useContext } from "react";
import { BsBag } from "react-icons/bs";
import { SidebarContext } from "../contexts/SidebarContext";

const Header = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  return (
    <header className="bg-pink-500">
      <div>Header</div>
      <div className="cursor-pointer flex relative" onClick={() => setIsOpen(!isOpen)}>
        <BsBag className='text-2xl'/>
      </div>
    </header>
  );
};

export default Header;
