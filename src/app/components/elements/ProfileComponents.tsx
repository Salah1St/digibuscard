import icons from "@/asset/icons";
import MobileTel from "@/asset/icons/MobileTel";
import images from "@/asset/images";
import Image from "next/image";
import React from "react";

function ProfileComponents() {
  return (
    <div className="relative w-full  rounded-xl overflow-hidden border border-white">
      <ProfileBlock />
      <ContactBlock />
    </div>
  );
}

export default ProfileComponents;
function ProfileBlock() {
  return (
    <div className="relative w-full h-[600px] object-center overflow-hidden">
      <Image src={images.profilePic} alt="" />
      <ProfileContent />
      <div className="absolute z-30 left-0 right-0 bottom-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent"></div>
    </div>
  );
}
function ProfileContent() {
  return (
    <div className=" absolute z-50 bottom-0 left-0 right-0 w-full h-1/3 flex flex-col text-white drop-shadow-text gap-4 px-4">
      <div className="text-5xl font-semibold ">warisa phetarphorn</div>
      <div>Area Sales Manager</div>
      <div className="font-semibold ">Burkert (Thaland) Ltd.</div>
      <div className=" object-contain">
        <Image className="w-[120px] object-contain" src={images.company} alt="" />
      </div>
    </div>
  );
}
function ContactBlock() {
  return (
    <div className=" w-full h-[100px] bg-black flex gap-4 px-4">
      <div className="w-12 h-12 rounded-full bg-slate-700 p-2">
        <a href="tel:+66812553555">
          <Image src={icons.mobile} alt=""></Image>
        </a>
      </div>
      <div className="w-12 h-12 rounded-full bg-slate-700 p-2">
        <a href="mailto:Warisa.phetarphorn.com">
          <Image src={icons.mail} alt=""></Image>
        </a>
      </div>
    </div>
  );
}
