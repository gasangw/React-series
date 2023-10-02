import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./server";

function Vans() {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    fetch("/api/vans")
      .then((response) => response.json())
      .then((data) => setVans(data.vans));
  }, []);

  return (
    <div className="bg-[#FFF7ED] text-[#161616] px-14">
      <h1 className="text-4xl font-bold py-5">Explore our van options</h1>
      <div className="flex space-x-4 text-[#4d4d4d]">
        <input
          type="button"
          name="Simple"
          value="Simple"
          className="bg-[#FFEAD0] border-none outline-none font-medium px-8 py-2 rounded-lg w-fit cursor-pointer"
        />
        <input
          type="button"
          name="Luxury"
          value="Luxury"
          className="bg-[#FFEAD0] border-none outline-none font-medium px-8 py-2 rounded-lg w-fit cursor-pointer"
        />
        <input
          type="button"
          name="Rugged"
          value="Rugged"
          className="bg-[#FFEAD0] border-none outline-none font-medium px-8 py-2 rounded-lg w-fit cursor-pointer"
        />
        <input
          type="button"
          name="Clear filters"
          value="Clear filters"
          className="border-none outline-none font-medium underline w-fit cursor-pointer"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 py-5 gap-5">
        {vans &&
          vans.map((van) => {
            return (
              <Link to={`/vans-details/${van.id}`}>
              <div key={van.id} className="grid">
                <img src={van.imageUrl} alt="van" className="rounded-lg" />
                <div className="flex justify-between items-center text-[#161616]">
                  <h4 className="text-lg font-bold">{van.name}</h4>
                  <div className="grid">
                    <p className="font-bold text-lg">${van.price}</p>
                    <p>/day</p>
                  </div>
                </div>
                <button
                  className="border-none outline-none font-medium px-8 py-2 rounded-lg w-fit text-white"
                  style={{
                    backgroundColor:
                      van.type == "simple"
                        ? "#E17654"
                        : van.type == "rugged"
                        ? "#115E59"
                        : "#161616",
                  }}
                >
                  {van.type}
                </button>
              </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
}

export default Vans;
