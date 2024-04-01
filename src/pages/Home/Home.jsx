import React from "react";
import Navbar from "../../component/Navbar";
import Hero from "../../component/Hero";
import Incoginteract from "../../component/Incoginterect";
import Mindmate from "../../component/Mindmate";
import Minducation from "../../component/Minducation";
import Pengguna from "../../component/Pengguna";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Incoginteract />
      <Mindmate />
      <Minducation />
      <Pengguna />
    </div>
  );
}
