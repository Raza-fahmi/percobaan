import React from "react";
import Gambar from "../assets/image/gambar.png";

export default function Hero() {
  return (
    <div className="w-full flex gap-5 bg-[#DAFFFB]">
      <div className="w-[720px]">
        <div className="pt-[65px] pr-[60px] pl-[81px] pb-[174px]">
          <h1 className="font-bold text-[40px]">
            Mengembalikan senyum Bahagiamu dengan Solusi yang terbaik
          </h1>
          <p className="text-lg font-normal mt-[27px]">
            Selamat datang di Mindmatter, tempat solusi untuk kesehatan mental
            Anda! menyediakan tes gratis, konsultasi, informasi terkini seputar
            kesehatan mental, dan menghubungkan Anda dengan komunitas untuk
            merawat kesehatan mental dan kesejahteraan Anda.
          </p>
        </div>
      </div>
      <div className="">
        <img alt="hero" src={Gambar} width={698} />
      </div>
    </div>
  );
}
