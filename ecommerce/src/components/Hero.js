import React from "react";

const Hero = () => {
  return (
    <section className="h-[800px] bg-[#dfdede] bg-no-repeat bg-cover bg-center py-24">
      <div className="container mx-auto flex justify-around h-full gap-40 ">
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="ml-2 font-semibold flex items-center mb-2">
             Womens Collection 2018
          </div>
          <h1 className="text-[70px] leading-[1.1] font-light mb-2 text-center">
            SPRING SALE <br /> <span className="text-[#1f59bc]">STYLISH</span> 
          </h1>
          <p className="mb-6 ml-2 text-xl font-extralight"><h1>Upto 30 % off</h1></p>
          <div>
            <a className="font-xl bg-[#1f59bc] px-6 py-3 text-white outline-none bottom-0 rounded-3xl" href="#cart">
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
