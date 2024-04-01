import React from "react";
import incog from "../assets/image/Incog.png";

export default function Incoginteract() {
  return (
    <div className="w-full bg-[#DAFFFB]">
      <div className="">
        <h1 className="text-[#04364A] text-[40px] font-bold text-center ">
          IncogInteract
        </h1>
        <p className="text-[#04364A] text-center font-medium mt-[23px] text-[20px]">
          Ruang berdiskusi seputar permasalahan kesehatan mental anda dengan
          IcogInteract
        </p>
      </div>
      <div className="flex bg-[#DAFFFB] ml-[100px] mr-[140px] mt-8">
        <div className="flex gap-[78px]">
          <div className="">
            <img alt="Incog" src={incog} width={419} />
          </div>
          <div className="w-[703px]">
            <div className=" font-normal text-[#04364A] text-[20px]">
              Tempat aman untuk berbagi dan mendiskusikan permasalahan kesehatan
              mental anda di sini. mendukung untuk berinteraksi dengan
              orang-orang yang peduli.
            </div>
            <div className="font-normal text-[#04364A] text-[20px] mt-3">
              Sehingga anda akan mendapatkan dukungan, informasi, dan inspirasi
              dari komunitas yang peduli tentang kesehatan mental. Bersama-sama,
              kita dapat mengatasi tantangan ini dan membangun kehidupan yang
              lebih sehat secara mental.
            </div>
            <button className="bg-[#44B4B4] text-[#176B87] py-3 px-[51px] rounded-[28px] font-semibold mt-4">
              Mulai Diskusi
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
