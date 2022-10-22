import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

//Icons
import Logo from "../assets/Logo.png";
import { BiSearchAlt } from "react-icons/bi";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search) {
      return;
    }

    navigate(`/search?q=${search}`);
    setSearch("");
  };

  return (
    <nav className="flex flex-col h-full px-4">
      <div className="py-4">
        <div className="flex justify-around items-center my-4">
          <Link to="/">
            <img src={Logo} className="h-5" title="Moovies" />
          </Link>
          <form
            onSubmit={handleSubmit}
            className="flex items-center w-52 relative"
          >
            <input
              type="text"
              placeholder="Buscar filme"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              className="bg-slate-800 w-full pl-4 py-2 rounded-xl placeholder:text-sm placeholder:text-white caret-cyan-500 focus:outline-none focus:ring-2 focus:border-cyan-500"
            />
            <button type="submit" className="absolute right-2">
              <BiSearchAlt size="1.8em" color="gray" />
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
