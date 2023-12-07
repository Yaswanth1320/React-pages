import React, { useContext, useState, useEffect } from "react";
import { BsBag } from "react-icons/bs";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";
import Logo from "../img/logo.svg";

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
          <div>
            <img className="w-[40px] " src={Logo} alt="" />
          </div>
        </Link>
        <div
          className="cursor-pointer flex relative"
          onClick={() => setIsOpen(!isOpen)}
        >
          <BsBag className="text-2xl" />
          <div className="bg-red-500 absolute -right-1 bottom-2 text-[12px] w-[15px] h-[15px] text-white rounded-full flex justify-center items-center ">
            {itemAmount}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
