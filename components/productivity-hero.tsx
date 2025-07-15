export const ProductivityHero = () => {
  return (
    <div className="relative">
      <div className="relative inline-block">
        <h1 className="text-[3rem] hidden md:block md:text-[2.7rem] lg:text-[3.8rem] xl:text-[4rem] leading-[50px] md:leading-[55px] lg:leading-[75px] xl:leading-[76px] font-bold text-gray-900">
          We're here to
          <br />
          Increase your
          <br />
          Productivity
        </h1>
        <h1 className="text-[2.6rem] sm:text-[3rem] md:hidden text-center md:text-[2.7rem] lg:text-[3.8rem] xl:text-[4rem] leading-[55px] sm:leading-[50px] md:leading-[55px] lg:leading-[75px] xl:leading-[76px] font-bold text-gray-900">
          We're here to Increase your Productivity
        </h1>

        {/* SVG Curved Line */}
        <svg
          className="absolute -bottom-11 left-0 w-full h-8"
          viewBox="0 0 100 20"
          preserveAspectRatio="none"
        >
          <path
            d="M5 15 Q50 5 95 15"
            stroke="#10B981"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
};
