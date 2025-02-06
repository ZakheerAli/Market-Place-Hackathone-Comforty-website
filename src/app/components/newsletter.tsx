import Image from "next/image";
export default function NewsLetter() {
  return (
    <>
      <div className=" px-[1vw] md:px-[6vw] bg-[#1E28320D] w-full h-fit md:h-[800px] mb-[400px] text-center space-y-12 pt-7">
        <div>
          <h1 className="text-[30px] md:text-[5vw] font-semibold">
            Or subscribe to the newsletter
          </h1>
        </div>
        <div className=" px-[1vw] md:px-[5vw] flex justify-between">
          <input
            type="text"
            placeholder="Email Address..."
            className="w-[80%] py-4 px-5 text-xl bg-transparent border-b-2 border-black"
          />
          <button className="text-[22px] border-b-2 border-black">SUBMIT</button>
        </div>
        <div><h1 className=" text-[27px] md:text-[4vw] font-semibold">Follow products and discounts on Instagram</h1></div>
        <div className="space-x-5 space-y-5">
        <Image src="/Image.png" alt="image1" width={170} height={200} className="inline-block hover:scale-105"/>
        <Image src="/Image (1).png" alt="image2" width={170} height={200} className="inline-block hover:scale-105"/>
        <Image src="/Image (2).png" alt="image3" width={170} height={200} className="inline-block hover:scale-105"/>
        <Image src="/Image (3).png" alt="image4" width={170} height={200} className="inline-block hover:scale-105"/>
        <Image src="/Image (6).png" alt="image5" width={170} height={200} className="inline-block hover:scale-105"/>
        <Image src="/Image (4).png" alt="image5" width={170} height={200} className="inline-block hover:scale-105"/>

        </div>
      </div>
    </>
  );
}
