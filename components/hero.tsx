import Image from "next/image";
import { ProductivityHero } from "./productivity-hero";
import { Navbar } from "./navbar";
import { IoCheckmarkDoneOutline } from "react-icons/io5";

export const Hero = () => {
  return (
    <section className="flex flex-col curved-gradient items-center ">
      <Navbar />
      <div className="max-w-[1350px] px-5 md:px-10 py-16 sm:py-28 w-full flex flex-col md:flex-row items-center gap-8 ">
        {/* Left */}
        <div className="basis-full md:basis-[50%] ">
          <ProductivityHero />
          <p className="mt-16 hidden md:block text-[14px] md:text-[13px] lg:text-[15px] font-medium">
            Let's make your work more organize and easily using <br /> the
            Taskio Dashboard with many of the latest <br /> featuresin managing
            work every day.
          </p>
          <p className="mt-16 md:hidden text-center text-[15px] md:text-[13px] opacity-70 lg:text-[15px] font-normal">
            Let's make your work more organize and easily using the Taskio
            Dashboard with many of the latest featuresin managing work every
            day.
          </p>
          {/* Buttons */}
          <div className="flex items-center justify-center mt-8 gap-4">
            <button className="rounded-full bg-primary text-white text-[14px] px-6 py-3">
              Join now
            </button>
            <button className="rounded-full bg-transparent flex items-center gap-2 px-6 text-[14px] py-3">
              <IoCheckmarkDoneOutline />
              Outlines
            </button>
          </div>
        </div>
        {/* Right */}
        <div className="basis-full mt-7 md:mt-0 md:basis-[50%] ">
          <Image
            src="/hero.png"
            alt="Productivity hero illustration"
            width={625}
            height={500}
            className=""
            priority
            quality={90}
          />
        </div>
      </div>

      <div className="max-w-[1000px] flex flex-col pb-20 w-full gap-8 ">
        <p className="text-center text-[1.5rem] md:text-[1.8rem] lg:text-[2.1rem] font-bold text-gray-900">
          More than 25,000 teams use Collabs
        </p>

        <div className="relative overflow-hidden">
          <div className="flex items-center gap-11 md:gap-0 justify-between animate-scroll sm:animate-none">
            {[
              "/descript.png",
              "/grammarly.png",
              "/intercom.png",
              "/notion.png",
              "/unsplash.png",
            ].map((i) => (
              <Image src={i} alt={`${i}`} key={i} width={150} height={100} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
