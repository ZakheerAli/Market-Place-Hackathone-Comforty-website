import Image from "next/image"
import Link from "next/link"
export default function Hero1(){
    return(
    <>
      <div className="px-[6vw] ">
        <div className="w-full h-[400px] md:h-[600px] bg-[#F0F2F3]  flex">
            <div className=" w-full lg:w-[50%] h-full bg-[#F0F2F3]  flex flex-col items-center justify-center">
            <div className="w-full h-full px-[20px] md:gap-8 flex flex-col justify-center space-y-6">
              <p className=" text-[20px] sm-[3vw] md:text-[2vw] font-normal">Welcome to chairy</p>
              <h1 className=" text-[50px] sm:text-[50px]  md:text-[70px] lg:text-[80px] font-bold leading-[50px] sm:leading-[60px] md:leading-[66px] ">
                Best Furniture Collection for your interior.
              </h1>
              <Link href="/product">
              <button className=" w-[150px] h-[52px] bg-[#029FAE] text-white rounded-lg hover:text-[#029FAE] hover:bg-black">
                Shop Now <i className="ri-arrow-right-line"></i>
              </button></Link>
             
            </div>
            </div>
            <div className="w-[50%] h-full  bg-[#F0F2F3]  lg:flex items-center justify-center py-[10px] hidden ">
                <Image src="/hero1.png" alt="Chair" width={400} height={400}/>
            </div>
        </div>
      </div>
      </>
    )
}
// className="w-[26vw]"