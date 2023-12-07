import React, { useContext, useState, useEffect } from "react";
import { BsBag } from "react-icons/bs";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";
import Logo from "../img/logo1.svg";

const Header = () => {
  const [active, setActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setActive(true) : setActive(false);
    });
  },[]);

  return (
    <header
      className={`${active ? "bg-white py-4 shadow-md" : "bg-none py-6"} fixed w-full z-10 transition-all`}
    >
      <div className="container mx-auto flex item-center justify-between h-full">
        <Link to="/">
          <div className="flex justify-center items-center gap-x-3">
            {/* <img className="w-[30px] " src={Logo} alt="" /> */}
            <h1 className="text-2xl web-name text-[#4380e9]"><span className="text-black font-semibold">Surf</span> Store</h1>
          </div>
        </Link>
        <div
          className="cursor-pointer flex relative"
          onClick={() => setIsOpen(!isOpen)}
        >
          <BsBag className="text-2xl" />
          <div className="bg-[#1f59bc] absolute -right-1 bottom-0 text-[12px] w-[15px] h-[15px] text-white rounded-full flex justify-center items-center ">
            {itemAmount}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
