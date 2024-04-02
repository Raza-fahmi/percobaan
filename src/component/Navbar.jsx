import React from "react";
import logo from "../assets/image/profile.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-[#176B87] px-10 py-4 justify-between flex">
      <div className="w-12 h-auto">
        <img src={logo} alt="logo" />
      </div>
      <div className="flex gap-[60px] items-center text-[#DAFFFB]">
        <p className="hover:underline underline-offset-3">Beranda</p>
        <p className="hover:underline underline-offset-3">Minducation</p>
        <Link to="/Mindmate"><p className="hover:underline underline-offset-3">MindMate</p></Link>
        <p className="hover:underline underline-offset-3">IncogInteract</p>
        <p className="hover:underline underline-offset-3">About</p>
      </div>
      <div>
        <Link to="/register"> <button className="bg-[#44B4B4] text-[#176B87] font-semibold px-4 py-2 rounded-[20px] w-[162px] h-[49px]">
          Login</button></Link>
        
      </div>
    </nav>
  );
}

export default Navbar;
