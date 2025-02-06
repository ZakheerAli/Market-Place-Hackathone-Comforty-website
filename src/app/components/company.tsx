import Image from "next/image";

export default function Companies() {
  return (
    <div className="main-div ">
      <div className="scroll-container">
        <div className="scroll-content">
          {/* Images - Original Set */}
          <Image src="/company1.png" alt="Company 1" width={140} height={90} quality={100} className="img object-fit"  />
          <Image src="/company2.png" alt="Company 2" width={140} height={90} quality={100} className="img object-fit"  />
          <Image src="/company3.png" alt="Company 3" width={140} height={90} quality={100} className="img object-fit"  />
          <Image src="/company5.png" alt="Company 5" width={140} height={90} quality={100} className="img object-fit"  />
          <Image src="/company6.png" alt="Company 6" width={140} height={90} quality={100} className="img object-fit"  />

          {/* Duplicate Images for Smooth Loop */}
          <Image src="/company1.png" alt="Company 1" width={140} height={90} quality={100} className="img object-fit"  />
          <Image src="/company2.png" alt="Company 2" width={140} height={90} quality={100} className="img object-fit"  />
          <Image src="/company3.png" alt="Company 3" width={140} height={90} quality={100} className="img object-fit"  />
          <Image src="/company5.png" alt="Company 5" width={140} height={90} quality={100} className="img object-fit"  />
          <Image src="/company6.png" alt="Company 6" width={140} height={90} quality={100} className="img object-fit"  />

          {/* Duplicate Images for Smooth Loop */}
          <Image src="/company1.png" alt="Company 1" width={140} height={90} quality={100} className="img object-fit"  />
          <Image src="/company2.png" alt="Company 2" width={140} height={90} quality={100} className="img object-fit"  />
          <Image src="/company3.png" alt="Company 3" width={140} height={90} quality={100} className="img object-fit"  />
          <Image src="/company5.png" alt="Company 5" width={140} height={90} quality={100} className="img object-fit"  />
          <Image src="/company6.png" alt="Company 6" width={140} height={90} quality={100} className="img object-fit"  />

           {/* Duplicate Images for Smooth Loop */}
           <Image src="/company1.png" alt="Company 1" width={140} height={90} quality={100} className="img object-fit"  />
          <Image src="/company2.png" alt="Company 2" width={140} height={90} quality={100} className="img object-fit"  />
          <Image src="/company3.png" alt="Company 3" width={140} height={90} quality={100} className="img object-fit"  />
          <Image src="/company5.png" alt="Company 5" width={140} height={90} quality={100} className="img object-fit"  />
          <Image src="/company6.png" alt="Company 6" width={140} height={90} quality={100} className="img object-fit"  />
        </div>
      </div>
    </div>
  );
}


