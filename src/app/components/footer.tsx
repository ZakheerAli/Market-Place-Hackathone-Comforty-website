import "remixicon/fonts/remixicon.css";
import Image from "next/image";
export default function Footer() {
  return (
    <div>
      <div className="xs:h-[700px] md:h-[418px]  xs:px-10 md:px-20  border-t-gray-200 ">
        <div className=" h-[900px] xs:mb-28 md:h-[343px] w-full  flex  px-5 justify-between flex-col md:flex-row gap-0 md:gap-6 lg:gap-0">
          <div className="h-[198px] md:w-[330px] space-y-4">
            <div className="flex gap-3 ">
              <Image src="/Logo Icon.png" alt="Logo" width={50} height={50} className="object-cover"/>
              <p className="text-[26px]">Comforty</p>
            </div>
            <p className=" xs:text-xs md:text-base font-normal">
              Vivamus tristique odio sit amet velit semper, eu posuere turpis
              interdum. Cras egestas purus{" "}
            </p>
            <div className="text-2xl flex gap-3">
              <i className="ri-facebook-circle-fill hover:text-green-600 hover:font-bold cursor-pointer"></i>
              <i className="ri-twitter-fill hover:text-green-600 hover:font-bold cursor-pointer"></i>
              <i className="ri-instagram-line hover:text-green-600 hover:font-bold cursor-pointer"></i>
              <i className="ri-pinterest-fill hover:text-green-600 hover:font-bold cursor-pointer"></i>
              <i className="ri-youtube-fill hover:text-green-600 hover:font-bold cursor-pointer"></i>
            </div>
          </div>
        
          <div className="md:h-[203px]  md:w-[105px] space-y-1 cursor-pointer xs:px-7 md:px-0 block md:hidden lg:block">
            <h3 className="text-[#9A9CAA] font-bold">Category</h3>
            <p className="hover:text-green-800 hover:underline cursor-pointer text-base font-normal">Sofa</p>
            <p className="hover:text-green-800 hover:underline cursor-pointer text-base font-normal" >Arm Chair</p>
            <p className="hover:text-green-800 hover:underline cursor-pointer text-base font-normal" >Wing chair</p>
            <p className="hover:text-green-800 hover:underline cursor-pointer text-base font-normal" >Desk Chair</p>
            <p className="hover:text-green-800 hover:underline cursor-pointer text-base font-normal" >Wooden Chair</p>
            <p className="hover:text-green-800 hover:underline cursor-pointer text-base font-normal" >Park Bench</p>
          </div>
          <div className="md:h-[143px] md:w-[156px] space-y-1 xs:px-7 md:px-0 block md:hidden lg:block">
          <h3 className="text-[#9A9CAA] font-bold">Support</h3>
            <p className="hover:text-green-800 hover:underline cursor-pointer text-base font-normal">Help & Support</p>
            <p className="hover:text-green-800 hover:underline cursor-pointer text-base font-normal" >Terms & Conditiona</p>
            <p className="hover:text-green-800 hover:underline cursor-pointer text-base font-normal" >Privacy policy</p>
            <p className="hover:text-green-800 hover:underline cursor-pointer text-base font-normal" >Help</p>

          </div>
          <div className="md:h-[142px] md:w-[442px] space-y-2 xs:px-7">
          <h3 className="text-[#9A9CAA] font-bold">Support</h3>
          <div className="flex md:gap-3"><input type="text" placeholder="Your Email" className=" rounded-md h-[46px]  xs:w-[200px] md:w-[385px]" /> <button className="h-[46px] w-[127px] bg-[#029FAE] rounded-md hover:bg-black text-white">Subscribe</button></div>
          <p className="hover:text-green-800 hover:underline  text-base font-normal" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis reprehenderit ex quidem.</p>

          </div>
        

        </div>
        <div className="h-[75px] w-full px-7 flex items-center  justify-between xs:flex-col md:flex-row xs:px-6">
            <p className=" xs:text-xs md:text-base font-normal">@ 2021 - Blogy - Designed & Develop by Zakirsoft</p>
            <Image src="/footer.png"  className="bg-white rounded-md " alt="logo" width={150} height={100} />
        </div>
      </div>
    </div> 
  );
}
