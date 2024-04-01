import React from "react";
import mind from "../assets/image/mindmate.png";

export default function Mindmate() {
  return (
    <div className="w-full bg-[#DAFFFB] pt-24">
      <div>
        <h1 className="text-[#04364A] text-[40px] font-bold text-center">
          MindMate
        </h1>
        <p className="text-[#04364A] text-center font-medium mt-[23px]">
          Konsultasi kesehatan mental anda dengan mindmate
        </p>
      </div>
      <div className="flex bg-[#DAFFFB] ml-[100px] mr-[140px] mt-8">
        <div className="flex gap-[58]">
          <div className="w-[580px]">
            <div className="text-[#04364A]">
              <h1 className="font-semibold text-[32px]">
                Mencari lingkungan yang nyaman dan aman untuk berbicara?{" "}
              </h1>
              <h2 className="font-normal text-[20px] mt-5">
                Psikolog yang berpengalaman siap membantu kamu mengatasi
                berbagai masalah dengan penuh perhatian, cepat tanggap, dan
                ramah.
              </h2>
              <button className="bg-[#44B4B4] text-[#176B87] py-3 px-[51px] rounded-[28px] font-semibold mt-10">
                Mulai Konseling
              </button>
            </div>
          </div>
          <div>
            <img alt="mindmate" src={mind} />
          </div>
        </div>
      </div>
    </div>
  );
}
