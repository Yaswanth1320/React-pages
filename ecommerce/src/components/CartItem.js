import React,{ useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
import { CartContext } from "../contexts/CartContext";

const CartItem = ({ item }) => {
  const { removeFromCart,incrementAmount,decrementAmount } = useContext(CartContext)
  const { id, title, price, image, amount } = item;
  return (
    <div className="flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-white text-gray-500">
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        <div>
          <Link to={`/product/${id}`}>
            <img className="max-w-[80px]" src={image} alt="" />
          </Link>
        </div>
        <div className="flex w-full flex-col">
          <div className="flex justify-between mb-2">
            <Link
              className="text-sm uppercase font-medium max-w-[240px] text-primary hover:underline"
              to={`/product/${id}`}
            >
              {title}
            </Link>
            <div onClick={() => removeFromCart(id)} className="text-xl cursor-pointer">
              <IoMdClose className="text-gray-500 hover:text-red-500 transition" />
            </div>
          </div>
          <div className="flex gap-x-2 h-[36px] text-sm">
            <div className="flex flex-1 max-w-[100px] h-full border text-primary font-medium">
              <div onClick={() => decrementAmount(id)} className="flex-1 flex justify-center items-center cursor-pointer h-full">
                <IoMdRemove />
              </div>
              <div className="h-full flex justify-center items-center px-2">{amount}</div>
              <div onClick={() => incrementAmount(id)} className="flex-1 h-full flex justify-center items-center cursor-pointer">
                <IoMdAdd />
              </div>
            </div>
            <div className="flex-1 flex items-center justify-around">Rs.{Math.floor(price*80)} </div>
            <div className="flex-1 flex justify-end items-center text-primary font-medium">Rs.{Math.floor(price*80*amount)} </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
