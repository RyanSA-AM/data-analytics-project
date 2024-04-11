import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-center fixed top-0 w-full bg-black h-24 items-center text-white  lg:px-0 z-10">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
      <ul className="hidden md:flex">
        <li className="p-4">Início</li>
        <li className="p-4">Empresa</li>
        <li className="p-4">Recursos</li>
        <li className="p-4">Sobre</li>
        <li className="p-4">Contato</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          !nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900  bg-[#000300] ease-in-out duration-500 md:hidden"
            : "fixed left-full"
        }
      >
        <h1 className="w-full text-3xl font-bold m-3 text-[#00df9a] hidden">
          REACT.
        </h1>
        <ul className="pt-24 uppercase">
          <li className="p-4 border-b border-b-gray-500">Início</li>
          <li className="p-4 border-b border-b-gray-500">Empresa</li>
          <li className="p-4 border-b border-b-gray-500">Recursos</li>
          <li className="p-4 border-b border-b-gray-500">Sobre</li>
          <li className="p-4 border-b border-b-gray-500">Contato</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
