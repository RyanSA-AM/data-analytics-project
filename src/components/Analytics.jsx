import React from "react";
import Laptop from "../assets/laptop.jpg";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img src={Laptop} alt="" />
        <div className="my-auto">
          <p className="text-[#00df9a] font-bold">DATA ANALYTICS DASHBOARD</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Gerencie a análise de dados centralmente
          </h1>
          <p className="font-medium">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
            repellat illum, esse blanditiis corporis, qui ullam beatae
            asperiores aliquid amet rem consequuntur odio expedita perferendis
            dignissimos modi, dolor quidem iure.
          </p>
          <button className="bg-black w-[200px] rounded-md font-bold my-6 mx-auto text-[#00df9a] py-3 hover:cursor-pointer">
            Começar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
