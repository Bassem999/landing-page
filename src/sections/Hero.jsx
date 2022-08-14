import hero_img from "../assets/hero_img.png";
export default () => {
  return (
    <section className="container grid lg:grid-cols-2 gap-x-10 gap-y-16 my-10">
      <div className="flex flex-col justify-center font-body">
        <span className="text-[#646464] font-medium lg:text-xl">
          MODERN INTERIOR
        </span>
        <h3 className="text-[#212121] font-semibold text-4xl lg:text-6xl font-poppins">
          Create Your Interior Design.
        </h3>
        <p className="text-[#646464] mt-6 mb-8 break-all text-sm lg:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation.
        </p>
        <a
          href="/contact"
          className="uppercase text-white text-xs lg:text-base font-bold bg-[#37806B] hover:bg-[#CAA892] duration-200 self-start px-7 py-3 rounded-tl-2xl rounded-br-2xl"
        >
          contact
        </a>
      </div>
      <div className="relative border-2 border-[#B0855B] rounded-tl-[140px] rounded-br-[140px]">
        <img
          src={hero_img}
          alt="hero_img"
          className="w-full h-full rounded-tl-[140px] rounded-br-[140px] lg:-translate-x-6 lg:-translate-y-6 hover:translate-x-0 hover:translate-y-0 duration-300"
        />
      </div>
      
    </section>
  );
};
