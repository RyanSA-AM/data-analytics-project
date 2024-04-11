import React from "react";
import { ReactTyped } from "react-typed";
const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="sm:text-2xl  text-[#00df9a] font-bold p-2">
          CRESCENDO COM DATA ANALYTICS
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Cresça com dados.
        </h1>
        <div className="flex gap-1 sm:gap-4 justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            Financiamento flexível para
          </p>
          <ReactTyped
            className="md:text-5xl sm:text-4xl text-xl font-bold"
            strings={["BTB", "BTC", "SASS"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl mt-2 font-bold text-gray-500 px-4">
          Monitore sua análise de dados para aumentar a receita das plataformas
          BTB, BTC e SASS
        </p>
        <button className="bg-[#00df9a] w-[200px] rounded-md font-bold my-6 mx-auto text-black py-3 hover:cursor-pointer">
          Começar
        </button>
      </div>
    </div>
  );
};

export default Hero;
