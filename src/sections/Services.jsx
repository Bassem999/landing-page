import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import { ReactComponent as ArrowRight } from "../assets/arrow-right.svg";
import { ReactComponent as ArrowLeft } from "../assets/arrow-left.svg";
import { ReactComponent as ArmChair } from "../assets/armchair.svg";
import { ReactComponent as Strategy } from "../assets/strategy.svg";
import { ReactComponent as Report } from "../assets/report.svg";
import "swiper/css";
export default () => {
  const slideData = [
    {
      title: "interior design",
      desc: `Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore.`,
      icon: ArmChair,
    },
    {
      title: "architecture",
      desc: `Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore.`,
      icon: Strategy,
    },
    {
      title: "planning",
      desc: `Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore.`,
      icon: Report,
    },
    {
      title: "architecture",
      desc: `Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore.`,
      icon: ArmChair,
    },
  ];
  return (
    <section className="container py-20">
      <div>
        <span className="text-[#646464] font-medium text-xl">WHAT WE DO</span>
        <h3 className="text-5xl font-medium">Our Service</h3>
      </div>
      <div>
        <div className="flex space-x-4 justify-end">
          <button
            id="prev"
            className="w-10 h-10 flex items-center justify-center rounded-full hover:text-white bg-white hover:bg-[#37806B] duration-300 shadow-xl"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <button
            id="next"
            className="w-10 h-10 flex items-center justify-center rounded-full hover:text-white bg-white hover:bg-[#37806B] duration-300 shadow-xl"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
      <Swiper
        modules={[Navigation, Autoplay]}
        autoplay={{ disableOnInteraction: false, delay: 5000 }}
        navigation={{
          nextEl: "#next",
          prevEl: "#prev",
          disabledClass:
            "cursor-not-allowed hover:bg-gray-100 hover:text-gray-400 text-gray-400",
        }}
        slidesPerView={1}
        breakpoints={{ 1024: { slidesPerView: 3 } }}
        spaceBetween={36}
        className="py-5"
      >
        {slideData.map((s, i) => (
          <SwiperSlide key={i}>
            <Slide
              title={s.title}
              icon={
                <s.icon className="group-hover:text-white duration-300 w-10 h-10" />
              }
              desc={s.desc}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

function Slide({ title, desc, icon }) {
  return (
    <div className="shadow-lg shadow-gray-200 flex space-x-4 rounded-tl-3xl rounded-br-3xl pl-5 py-16 lg:py-6 pr-6 hover:bg-[#CAA892] group duration-300">
      <div>{icon}</div>
      <div className="font-body space-y-4">
        <h4 className="text-[#212121] text-2xl font-bold group-hover:text-white duration-200">
          {title}
        </h4>
        <p className=" text-[#646464] text-sm  group-hover:text-white duration-200">
          {desc}
        </p>
      </div>
    </div>
  );
}
