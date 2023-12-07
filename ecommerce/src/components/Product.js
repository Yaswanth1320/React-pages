import React from "react";
import { Link } from "react-router-dom";
import { BsPlus, BsEyeFill } from "react-icons/bs";

const Product = ({ product }) => {
  console.log(product);

  const { id, image, category, price, title } = product;
  return (
    <div className="">
      <div className="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition">
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-[200px] mx-auto flex items-center justify-center">
            <img
              className="max-h-[160px] group-hover:scale-110 trasition duration-300"
              src={image}
              alt="image"
            />
          </div>
          <div className="absolute top-0 -right-11 group-hover:right-0 p-2 flex flex-col justify-center gap-y-1 opacity-0 group-hover:opacity-100 transition-all">
            <button>
              <div className="flex justify-center items-center text-white bg-red-500 w-10 h-10">
                <BsPlus className="text-3xl" />
              </div>
            </button>
            <div className="w-10 h-10 bg-white flex items-center justify-center text-primary drop-shadow-xl">
              <Link to={`product/${id}`}>
                <BsEyeFill />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="text-sm capitalize text-gray-500 mb-1">{category}</div>
        <Link to={`product/${id}`}>
          <h2 className="font-semibold mb-1">{title}</h2>
        </Link>
        <div className="font-semibold">Rs.{Math.floor(price*80)} /-</div>
      </div>
    </div>
  );
};

export default Product;
