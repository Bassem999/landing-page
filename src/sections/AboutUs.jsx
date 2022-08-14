import about from "../assets/about.png";
import about2 from "../assets/about2.png";
export default () => {
  return (
    <section className="container space-y-20 lg:space-y-40 my-20">
      <div className="grid lg:grid-cols-2 gap-x-20 gap-y-16">
        <div className="relative border-2 border-[#B0855B] rounded-tl-[100px] rounded-br-[100px]">
          <img
            src={about}
            alt="about_img"
            className="w-full h-full rounded-tl-[100px] rounded-br-[100px] lg:-translate-x-6 lg:-translate-y-6 hover:translate-x-0 hover:translate-y-0 duration-300"
          />
        </div>
        <div className="flex flex-col justify-center font-body">
          <span className="text-[#646464] font-medium lg:text-xl uppercase">
            about us
          </span>
          <h3 className="text-[#212121] font-semibold text-4xl lg:text-6xl  font-poppins">
            Interioris The Will of An Epoch Mextreo
          </h3>
          <p className="text-[#646464] mt-6 mb-8 break-all text-sm lg:text-base">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form injected humour,
            or randomised words which don't look even slightly believable.If you
            are going to use a passage of Lorem Ipsum, sure there isn't anything
            embarrassing hidden the middleof text. All the Lorem Ipsum
            generators on the Internettend to repeat predefined chunks as
            necessary,making this the first true generator on the Internet.
          </p>
          <a
            href="/learn-more"
            className="uppercase text-xs lg:text-base text-white font-bold bg-[#37806B] hover:bg-[#CAA892] duration-200 self-start px-7 py-3 rounded-tl-2xl rounded-br-2xl"
          >
            LEARN MORE
          </a>
        </div>
      </div>
      <div className="container grid lg:grid-cols-2 gap-x-20 gap-y-16">
        <div className="flex flex-col justify-center font-body bg-no-repeat bg-clip-text bg-center" style={{ backgroundImage: `url("/bg-img.jpg")` }}>
          <span
            className="text-[240px] font-body font-bold text-transparent leading-tight"
          >
            20
          </span>
          <p className="text-[#212121] text-5xl mb-8 ">
            Years Of Successful Working The Market
          </p>
          <a
            href="/learn-more"
            className="uppercase text-xs lg:text-base text-white font-bold bg-[#37806B] hover:bg-[#CAA892] duration-200 self-start px-7 py-3 rounded-tl-2xl rounded-br-2xl"
          >
            read more
          </a>
        </div>
        <div className="relative border-2 border-[#B0855B] rounded-tl-[100px] rounded-br-[100px]">
          <img
            src={about2}
            alt="about"
            className="w-full h-full rounded-tl-[100px] rounded-br-[100px] lg:-translate-x-6 lg:-translate-y-6 hover:translate-x-0 hover:translate-y-0 duration-300"
          />
        </div>
      </div>
    </section>
  );
};
