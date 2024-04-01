import React from "react";
import Artikel1 from "../assets/image/artikel1.png";

export default function Minducation() {
  return (
    <div className="w-full bg-[#DAFFFB] pt-24 ">
      <div>
        <h1 className="text-[#04364A] text-[40px] font-bold text-center">
          Minducation
        </h1>
        <p className="text-[#04364A] text-center font-medium mt-[23px]">
          Ruang edukasi terkait permasalahan kesehatan anda dengan Minducation
          <br />
          Temukan informasi terkini dan terpercaya seputar kesehatan mental kamu
        </p>
      </div>
      <div className="grid grid-cols-3 gap-[30px] mt-[54px] ml-[100px] mr-[140px]">
        <div className="shadow-xl bg-[#C5EBE9] rounded-lg text-[#176B87]">
          <img src={Artikel1} alt="Artikel" className="rounded-t-lg" />
          <h1 className="font-semibold text-[18px] ml-[20px] mr-[20px] mt-[22px]">
            Pentingnya Kesehatan Mental bagi Remaja
          </h1>
          <h2 className="font-light text-[16px] mt-3 ml-[20px] mr-[20px]">
            Kesehatan mental dipengaruhi oleh Peristiwa dalam kehidupan yang
            meninggalkan dampak ...
          </h2>
          <h3 className="font-semibold text-[14px] mt-7 ml-[20px] mr-[20px] mb-3">
            Lihat Selengkapnya...
          </h3>
        </div>
        <div className="shadow-xl bg-[#C5EBE9] rounded-lg text-[#176B87]">
          <img src={Artikel1} alt="Artikel" className="rounded-t-lg" />
          <h1 className="font-semibold text-[18px] ml-[20px] mr-[20px] mt-[22px]">
            Pentingnya Kesehatan Mental bagi Remaja
          </h1>
          <h2 className="font-light text-[16px] mt-3 ml-[20px] mr-[20px]">
            Kesehatan mental dipengaruhi oleh Peristiwa dalam kehidupan yang
            meninggalkan dampak ...
          </h2>
          <h3 className="font-semibold text-[14px] mt-7 ml-[20px] mr-[20px] mb-3">
            Lihat Selengkapnya...
          </h3>
        </div>
        <div className="shadow-xl bg-[#C5EBE9] rounded-lg text-[#176B87]">
          <img src={Artikel1} alt="Artikel" className="rounded-t-lg" />
          <h1 className="font-semibold text-[18px] ml-[20px] mr-[20px] mt-[22px]">
            Pentingnya Kesehatan Mental bagi Remaja
          </h1>
          <h2 className="font-light text-[16px] mt-3 ml-[20px] mr-[20px]">
            Kesehatan mental dipengaruhi oleh Peristiwa dalam kehidupan yang
            meninggalkan dampak ...
          </h2>
          <h3 className="font-semibold text-[14px] mt-7 ml-[20px] mr-[20px] mb-3">
            Lihat Selengkapnya...
          </h3>
        </div>
      </div>
      <div className="mt-10 text-center">
        <button className="bg-[#44B4B4] text-[#176B87] py-3 px-[51px] rounded-[28px] font-semibold">
          Lihat Semua
        </button>
      </div>
    </div>
  );
}
