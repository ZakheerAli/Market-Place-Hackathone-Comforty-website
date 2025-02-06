import Image from "next/image";

export default function About() {
  return (
    <>
      {/* Hero Section */}
    
      <div className="px-[11vw] mt-20">
        <div className="w-full md:h-[900px] lg:h-[400px] flex gap-[5vw] lg:flex-row flex-col">
          <div className=" px-5 w-full lg:w-[50%] h-full bg-gradient-to-r from-[#007580] to-[#005f63] rounded-lg text-white md:px-[3vw] py-6 md:py-11 space-y-7 shadow-lg">
            <h1 className="text-[30px] md:text-[40px] lg:text-[3vw] font-bold">
              About Us - Comforty
            </h1>
            <p className="md:text-[22px] lg:text-lg leading-relaxed">
              At Comforty, we believe that the right chair can transform your
              space and elevate your comfort. Specializing in ergonomic design,
              premium materials, and modern aesthetics, we craft chairs that
              seamlessly blend style with functionality.
            </p>
            <button className="px-6 py-3 md:px-7 md:py-3 bg-[#F9F9F926] rounded-lg shadow-md hover:bg-white hover:text-[#007580] transition-all duration-300 ease-in-out">
              View Collection
            </button>
          </div>{" "}
          <div className="w-full lg:w-[50%] h-full rounded-lg overflow-hidden">
            <Image
              src="/Image.png"
              alt="About Image"
              width={500}
              height={400}
              className="object-cover object-center w-full h-[400px] rounded-lg hover:scale-105 transition-all duration-500 ease-in-out"
            />
          </div>
        </div>
      </div>

      {/* What Makes Us Different */}
      <div className="py-20 px-6 md:px-[6vw]">
        <h1 className="text-center text-3xl md:text-4xl font-semibold mb-12">
          What Makes Us Different
        </h1>
        <div className="flex flex-wrap justify-center gap-6">
          {["/f1.png", "/f2.png", "/f3.png", "/f4.png"].map((src, index) => (
            <div
              key={index}
              className="w-[250px] h-[180px] bg-white bg-opacity-30 backdrop-blur-lg rounded-xl shadow-lg flex items-center justify-center p-5 hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              <Image src={src} alt="" width={200} height={200} />
            </div>
          ))}
        </div>
      </div>

      {/* Our Popular Products */}
      <div className="py-20 px-6 md:px-[8vw]">
        <h1 className="text-3xl md:text-4xl font-semibold text-center mb-12">
          Our Popular Products
        </h1>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              src: "/green.jfif",
              name: "The Poplar Suede Sofa",
              price: "$99.00",
            },
            { src: "/Parent.png", name: "The Dandy Chair", price: "$99.00" },
            {
              src: "/Parent (1).png",
              name: "The Dandy Chair",
              price: "$99.00",
            },
          ].map((product, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer"
            >
              <Image
                src={product.src}
                alt={product.name}
                width={500}
                height={300}
                className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h1 className="text-white text-xl font-semibold">
                  {product.name}
                </h1>
                <h1 className="text-white text-lg">{product.price}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}


